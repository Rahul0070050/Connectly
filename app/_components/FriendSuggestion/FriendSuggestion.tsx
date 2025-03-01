import { Button } from "@/components/ui/button";
import { sampleProfileURI } from "@/data/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PROPS = {
  name: string;
  profile: string;
  sriends: string[];
};

const FriendSuggestion = () => {
  return (
    <div className="bg-white p-6 flex flex-col gap-6 rounded-md">
      <div className="flex justify-between font-semibold text-xl">
        <h4>You Might Like</h4>
        <Link className="text-blue-500" href={"/friend-suggestion"}>
          See all
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          src={sampleProfileURI}
          alt="profile-image"
        />
        <div>
          <h4 className="text-xl font-normal">Clara Rios</h4>
          <p className="text-slate-500 font-semibold text-lg">14 More</p>
        </div>
      </div>
      <div className="flex gap-6">
        <Button className="text-lg px-5 py-6 w-full rounded-lg border-2 hover:bg-transparent hover:text-pink-500 hover:border-pink-400 text-white bg-pink-500">
          Follow
        </Button>
        <Button className="text-lg px-5 py-6 w-full rounded-lg border-2 border-gray-400">
          Ignore
        </Button>
      </div>
    </div>
  );
};

export default FriendSuggestion;
