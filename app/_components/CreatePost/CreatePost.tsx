import { ImageIcon, Smile, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

const sampleProfileURI =
  "data:image/jpeg;base64,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";

const CreatePost = () => {
  return (
    <div className="bg-white p-6">
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
        <button className="bg-pink-500 hover:bg-transparent hover:text-pink-400 border transition-all hover:border-pink-400 px-10 py-2 text-white rounded-md cursor-pointer">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
