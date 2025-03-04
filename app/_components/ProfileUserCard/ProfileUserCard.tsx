import { sampleProfileURI } from "@/data/profile";
import {
  Camera,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquareMore,
  Phone,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileUserCard = ({ userId }: { userId?: number }) => {
  return (
    <div className="flex flex-col gap-4 items-center py-8">
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
        {userId && (
          <span className="p-2 px-4 mt-1  border border-green-400 rounded-full">
            online
          </span>
        )}
      </div>
      {userId && (
        <div className="flex gap-5">
          <span className="p-2 rounded-full border-2 text-green-400 border-green-400 cursor-pointer hover:bg-green-400 hover:text-white transition-all">
            <Phone className="w-6 h-6" />
          </span>
          <span className="p-2 rounded-full border-2 text-rose-400 border-rose-400 cursor-pointer hover:bg-rose-400 hover:text-white transition-all">
            <Video className="w-6 h-6" />
          </span>
          <span className="p-2 rounded-full border-2 text-blue-400 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white transition-all">
            <Link href={"/user/chat"}>
              <MessageSquareMore className="w-6 h-6" />
            </Link>
          </span>
        </div>
      )}
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
