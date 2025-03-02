import { sampleProfileURI } from "@/data/profile";
import { EllipsisVertical, Phone, PhoneCallIcon, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

// You can use this 'chats' array in your chat app.
const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 py-3 sticky top-0 bg-gray-200 text-black/60">
      <div className="flex items-center gap-4 cursor-pointer">
        <Image
          className="rounded-full"
          width={47}
          height={47}
          src={sampleProfileURI}
          alt="sample-profile"
        />
        <div className="leading-5">
          <h4 className="text-xl font-semibold">Carlos Silva</h4>
          <span>online</span>
        </div>
      </div>
      <div className="flex gap-7 items-center">
        <Video className="w-8 h-8 cursor-pointer hover:text-black/60 transition-all" />
        <Phone className="w-7 h-7 cursor-pointer hover:text-black/60 transition-all" />
        <EllipsisVertical className="w-7 h-7 cursor-pointer hover:text-black/60 transition-all" />
      </div>
    </div>
  );
};

export default ChatHeader;
