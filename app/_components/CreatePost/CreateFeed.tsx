import { Button } from "@/components/ui/button";
import { sampleProfileURI } from "@/data/profile";
import { ImageIcon, Smile, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

const CreateFeed = () => {
  return (
    <div className="bg-white p-6 rounded-md">
      <div className="flex items-center gap-6">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          src={sampleProfileURI}
          alt="sample-profile"
        />
        <input
          className="font-medium text-xl rounded-md outline-none  p-3 px-2 pl-6 w-full bg-gray-100"
          type="text"
          placeholder="What's Happaning?"
          name=""
          id=""
        />
      </div>
      <div className="flex justify-between items-center mt-8 text-lg">
        <div className="flex gap-2 font-medium cursor-pointer group">
          <Video className="w-7 h-7 group-hover:text-pink-400" />
          <h4 className="group-hover:text-pink-400">Live Video</h4>
        </div>
        <div className="flex gap-2 font-medium cursor-pointer group">
          <ImageIcon className="w-7 h-7 group-hover:text-pink-400" />
          <h4 className="group-hover:text-pink-400">Media</h4>
        </div>
        <div className="flex gap-2 font-medium cursor-pointer group">
          <Smile className="w-7 h-7 group-hover:text-pink-400" />
          <h4 className="group-hover:text-pink-400">Fealing</h4>
        </div>
        <Button className="bg-pink-500 hover:bg-transparent hover:text-pink-400 border transition-all hover:border-pink-400 px-10 py-2 text-white rounded-md cursor-pointer">
          Post
        </Button>
      </div>
    </div>
  );
};

export default CreateFeed;
