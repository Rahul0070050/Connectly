"use client";
import { MessageSquareMore, Plus, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import { sampleProfileURI } from "@/data/profile";

const RightSidebar = () => {
  return (
    <div className="flex flex-col p-5 bg-white h-[calc(100vh-78px)]">
      <div className="flex items-center gap-2 rounded-md px-4 py-1 bg-gray-100 sticky top-0">
        <Search className="text-slate-400" />
        <input
          className="p-1 text-lg outline-none text-slate-700 bg-gray-100"
          placeholder="Search Stories"
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="py-5 flex gap-4">
        <div className="flex flex-col gap-4 items-center cursor-pointer group">
          <div className="relative">
            <Image
              className="rounded-full border-[3.5px] border-rose-500"
              width={70}
              height={70}
              src={sampleProfileURI}
              alt="sample-profile"
            />
            <Plus className="absolute -bottom-3 left-[35%] shadow-md bg-white border rounded-md text-rose-400" />
          </div>
          <h5 className="font-semibold">Add</h5>
        </div>
        <div className="flex flex-col gap-4 items-center cursor-pointer">
          <Image
            className="rounded-full border-[3.5px] border-rose-500"
            width={70}
            height={70}
            src={sampleProfileURI}
            alt="sample-profile"
          />
          <h5 className="font-semibold">Aisha...</h5>
        </div>
      </div>
      <SubHeading style="mt-3 mb-4" heading={"Resent Chat"} />
      <div className="overflow-scroll scrollbar-hide">
        <div className={`text-black flex flex-col gap-2`}>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-1"
            />
            <div>
              <h3 className="font-semibold text-lg">Aisha Khan</h3>
              <p className="text-slate-500 text-lg">Just finished...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-2"
            />
            <div>
              <h3 className="font-semibold text-lg">Carlos Silva</h3>
              <p className="text-slate-500 text-lg">Design mockups...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-3"
            />
            <div>
              <h3 className="font-semibold text-lg">Elena Petrova</h3>
              <p className="text-slate-500 text-lg">
                Meeting rescheduled to...
              </p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-4"
            />
            <div>
              <h3 className="font-semibold text-lg">David Lee</h3>
              <p className="text-slate-500 text-lg">Let's discuss...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-5"
            />
            <div>
              <h3 className="font-semibold text-lg">Sophie Dubois</h3>
              <p className="text-slate-500 text-lg">Quick feedback on...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-6"
            />
            <div>
              <h3 className="font-semibold text-lg">Kenji Tanaka</h3>
              <p className="text-slate-500 text-lg">Data analysis...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-7"
            />
            <div>
              <h3 className="font-semibold text-lg">Maria Garcia</h3>
              <p className="text-slate-500 text-lg">Project update in...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-8"
            />
            <div>
              <h3 className="font-semibold text-lg">Omar Hassan</h3>
              <p className="text-slate-500 text-lg">Need your approval...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-9"
            />
            <div>
              <h3 className="font-semibold text-lg">Li Wei</h3>
              <p className="text-slate-500 text-lg">Confirming the...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-10"
            />
            <div>
              <h3 className="font-semibold text-lg">Isabella Rossi</h3>
              <p className="text-slate-500 text-lg">Sent you the...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-11"
            />
            <div>
              <h3 className="font-semibold text-lg">Noah Smith</h3>
              <p className="text-slate-500 text-lg">Checking in on...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
          <div className="flex items-center gap-5 hover:bg-gray-100 p-3 rounded-md cursor-pointer">
            <Image
              className="rounded-full"
              width={56}
              height={56}
              src={sampleProfileURI}
              alt="profile-12"
            />
            <div>
              <h3 className="font-semibold text-lg">Sofia Gomez</h3>
              <p className="text-slate-500 text-lg">Reminder: Team...</p>
            </div>
            <MessageSquareMore className="ml-auto w-7 h-7 text-blue-400/90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
