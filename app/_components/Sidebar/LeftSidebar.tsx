import {
  Bookmark,
  House,
  LayoutGrid,
  Send,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";
import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import Image from "next/image";
import { sampleProfileURI } from "@/data/profile";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col p-7 bg-white h-screen gap-7">
      <h1 className="font-bold text-3xl mb-5">Connectly</h1>
      <ul className="flex flex-col gap-6">
        <Link href={"/user/feed"}>
          <li className="flex items-center gap-3 font-semibold text-base cursor-pointer text-rose-400 hover:text-rose-300 rounded-md">
            <House className="w-5" /> Feed
          </li>
        </Link>
        <li className="flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md">
          <LayoutGrid className="w-5" /> Explore
        </li>
        <li className="flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md">
          <ShoppingBag className="w-5" /> Marketplace
        </li>
        <li className="flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md">
          <Users className="w-5" /> Groups
        </li>
        <li className="flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md">
          <Bookmark className="w-5" /> My Favorites
        </li>
        <li className="flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md">
          <Send className="w-5" /> Messages
        </li>
        <Link href={"/user/settings/my-profile"}>
          <li className="flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md">
            <Settings className="w-5" /> Settings
          </li>
        </Link>
      </ul>
      <SubHeading style="mt-4 mb-1" heading={"My Contact"} />
      <div className="overflow-scroll scrollbar-hide">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex gap-4 items-center hover:bg-gray-100 p-3 px-2 rounded cursor-pointer transition-all">
            <Image
              className="rounded-full"
              width={55}
              height={55}
              src={sampleProfileURI}
              alt="profile-1"
            />
            <div>
              <h3 className="font-semibold text-lg">Aisha Khan</h3>
              <p className="text-slate-500 text-base">Software Developer</p>
            </div>
            <div className="p-2 rounded hover:bg-gray-200/60 text-black ml-auto"></div>
          </div>
          <div className="flex gap-4 items-center hover:bg-gray-100 p-3 px-2 rounded cursor-pointer transition-all">
            <Image
              className="rounded-full"
              width={55}
              height={55}
              src={sampleProfileURI}
              alt="profile-2"
            />
            <div>
              <h3 className="font-semibold text-lg">Carlos Silva</h3>
              <p className="text-slate-500 text-base">Graphic Designer</p>
            </div>
            <div className="p-2 rounded hover:bg-gray-200/60 text-black ml-auto"></div>
          </div>
          <div className="flex gap-4 items-center hover:bg-gray-100 p-3 px-2 rounded cursor-pointer transition-all">
            <Image
              className="rounded-full"
              width={55}
              height={55}
              src={sampleProfileURI}
              alt="profile-3"
            />
            <div>
              <h3 className="font-semibold text-lg">Elena Petrova</h3>
              <p className="text-slate-500 text-base">Marketing Manager</p>
            </div>
            <div className="p-2 rounded hover:bg-gray-200/60 text-black ml-auto"></div>
          </div>
          <div className="flex gap-4 items-center hover:bg-gray-100 p-3 px-2 rounded cursor-pointer transition-all">
            <Image
              className="rounded-full"
              width={55}
              height={55}
              src={sampleProfileURI}
              alt="profile-4"
            />
            <div>
              <h3 className="font-semibold text-lg">David Lee</h3>
              <p className="text-slate-500 text-base">Product Manager</p>
            </div>
            <div className="p-2 rounded hover:bg-gray-200/60 text-black ml-auto"></div>
          </div>
          <div className="flex gap-4 items-center hover:bg-gray-100 p-3 px-2 rounded cursor-pointer transition-all">
            <Image
              className="rounded-full"
              width={55}
              height={55}
              src={sampleProfileURI}
              alt="profile-5"
            />
            <div>
              <h3 className="font-semibold text-lg">Sophie Dubois</h3>
              <p className="text-slate-500 text-base">UX Designer</p>
            </div>
            <div className="p-2 rounded hover:bg-gray-200/60 text-black ml-auto"></div>
          </div>
          <div className="flex gap-4 items-center hover:bg-gray-100 p-3 px-2 rounded cursor-pointer transition-all">
            <Image
              className="rounded-full"
              width={55}
              height={55}
              src={sampleProfileURI}
              alt="profile-6"
            />
            <div>
              <h3 className="font-semibold text-lg">Kenji Tanaka</h3>
              <p className="text-slate-500 text-base">Data Scientist</p>
            </div>
            <div className="p-2 rounded hover:bg-gray-200/60 text-black ml-auto"></div>
          </div>
          <div className="flex gap-4 items-center hover:bg-gray-100 p-3 px-2 rounded cursor-pointer transition-all">
            <Image
              className="rounded-full"
              width={55}
              height={55}
              src={sampleProfileURI}
              alt="profile-7"
            />
            <div>
              <h3 className="font-semibold text-lg">Maria Garcia</h3>
              <p className="text-slate-500 text-base">Project Lead</p>
            </div>
            <div className="p-2 rounded hover:bg-gray-200/60 text-black ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
