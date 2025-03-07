import { Camera } from "lucide-react";
import banner from "../../../public/banner.jpg";
import Image from "next/image";
import React from "react";
import ProfileUserCard from "@/app/_components/ProfileUserCard/ProfileUserCard";
import SettingsTopBar from "@/app/_components/SettingsTopBar/SettingsTopBar";
import UserProfileData from "@/app/_components/UserProfileData/UserProfileData";
import FeedCard from "@/app/_components/FeedCard/FeedCard";
import { feeds } from "@/data/feed";
// import PasswordSettings from "@/app/_components/PasswordSettings/PasswordSettings";

const page = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className="w-full h-80"
          width={100}
          height={100}
          src={banner}
          alt="banner"
        />
        <div className="absolute top-3 right-3 bg-transparent border-white border-2 text-white rounded-md p-2 cursor-pointer flex items-center gap-2 font-medium">
          <Camera className="" />
          Change Cover
        </div>
      </div>
      <div className="grid grid-cols-12 bg-gray-100 gap-9 px-9">
        <div className="col-span-4 bg-white rounded-md -translate-y-28">
          <ProfileUserCard />
        </div>
        <div className="col-span-8 p-5 bg-white rounded-md -translate-y-28">
          <SettingsTopBar title="User Details" />
          <UserProfileData />
          {/* <SettingsTopBar title="Security & Login" /> */}
          {/* <PasswordSettings /> */}
        </div>
        <div className="col-span-12 p-5 bg-white rounded-md -translate-y-28">
          {feeds.map((feed) => (
            <FeedCard feed={feed} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
