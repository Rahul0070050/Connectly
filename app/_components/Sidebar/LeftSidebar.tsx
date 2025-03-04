"use client";
import {
  Bookmark,
  House,
  LayoutGrid,
  MessageSquareMore,
  Phone,
  Send,
  Settings,
  ShoppingBag,
  Users,
  Video,
} from "lucide-react";
import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import Image from "next/image";
import { sampleProfileURI } from "@/data/profile";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LeftSidebar = () => {
  const navigate = useRouter();
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
        {/* <Link href={"/user/settings/my-profile"}>
          <li className="flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md">
            <Settings className="w-5" /> Settings
          </li>
        </Link> */}
      </ul>
      <SubHeading style="mt-4 mb-1" heading={"My Contact"} />
      <div className="overflow-scroll scrollbar-hide">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex gap-4 items-center p-3 rounded cursor-pointer transition-all relative hover:bg-gray-100">
            <Link href={"/user/4"}>
              <Image
                className="rounded-full"
                width={50}
                height={50}
                src={sampleProfileURI}
                alt="profile-1"
              />
            </Link>
            <Link href={"/user/4"}>
              <div>
                <h3 className="font-semibold text-lg">Aisha Khan</h3>
                <p className="text-slate-500 text-base">Web Developer</p>
              </div>
            </Link>
            <div className="p-1 w-full flex gap-1 absolute left-16 bottom-2 bg-gray-100">
              <span className="p-1 rounded-full border-2 text-green-400 border-green-400 cursor-pointer hover:bg-green-400 hover:text-white transition-all">
                <Phone className="w-3 h-3" />
              </span>
              <span className="p-1 rounded-full border-2 text-rose-400 border-rose-400 cursor-pointer hover:bg-rose-400 hover:text-white transition-all">
                <Video className="w-3 h-3" />
              </span>
              <span
                className="p-1 rounded-full border-2 text-blue-400 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white transition-all"
                onClick={() => {
                  navigate.push("/user/chat");
                }}
              >
                <MessageSquareMore className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
