import { basserImage, sampleProfileURI } from "@/data/profile";
import { UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PROPS = {
  name: string;
  profile: string;
  sriends: string[];
};

const GroupSuggestion = () => {
  return (
    <div className="bg-white p-6 flex flex-col gap-6 rounded-md">
      <div className="flex justify-between font-semibold text-xl">
        <h4>Suggested Groups</h4>
        <Link className="text-blue-500" href={"/friend-suggestion"}>
          See all
        </Link>
      </div>
      <div className="relative flex items-center flex-col">
        <Image
          className="w-full object-cover h-40"
          width={60}
          height={60}
          src={basserImage}
          alt="profile-image"
        />
        <div className="absolute -bottom-9 left-7 flex items-center gap-2">
          <Image
            className="rounded-full border-4 border-white"
            width={65}
            height={65}
            src={sampleProfileURI}
            alt="profile-image"
          />
          <h4 className="text-lg font-semibold mt-7">Tech news</h4>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <p className="font-medium">178 Members</p>
        <UserPlus />
        {/* <button className="text-lg px-5 py-2 w-full rounded-md border-2 text-white bg-pink-500">
          Follow
        </button>
        <button className="text-lg px-5 py-2 w-full rounded-md border-2 border-gray-400">
          Ignore
        </button> */}
      </div>
    </div>
  );
};

export default GroupSuggestion;
