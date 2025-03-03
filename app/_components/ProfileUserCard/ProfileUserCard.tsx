import { sampleProfileURI } from "@/data/profile";
import { Camera, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfileUserCard = () => {
  return (
    <div className="flex flex-col gap-6 items-center py-8">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Image
            className="w-36 h-36 rounded-full"
            src={sampleProfileURI}
            width={100}
            height={100}
            alt="profile"
          />
          <Camera className="absolute bottom-1 right-4 bg-blue-500 border-white border-[3px] text-white rounded-full p-2 h-11 w-11 cursor-pointer" />
        </div>
        <h3 className="mt-2 font-bold text-lg">Rahul O R</h3>
        <p>Developer</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="flex font-semibold p-1 w-full justify-center">
          rahulor2000@gmail.com
        </span>
        <span className="flex font-semibold p-1 w-full justify-center">
          56587686786
        </span>
        <span className="flex font-semibold p-1 w-full justify-center items-center gap-1 hover:text-rose-400 cursor-pointer">
          <Linkedin className="w-4 h-4" />
          rahul-or
        </span>
        <span className="flex font-semibold p-1 w-full justify-center items-center gap-1 hover:text-rose-400 cursor-pointer">
          <Instagram className="w-4 h-4" />
          imrahulor
        </span>
        <span className="flex font-semibold p-1 w-full justify-center items-center gap-1 hover:text-rose-400 cursor-pointer">
          <Facebook className="w-4 h-4" />
          Rahul OR
        </span>
      </div>
    </div>
  );
};

export default ProfileUserCard;
