"use client";
import Image, { StaticImageData } from "next/image";
import React from "../../../public/feed/temple.jpg";
import { useEffect, useState } from "react";
import { Forward, Heart, MessageSquare, Share } from "lucide-react";

type PROPS = {
  feed: {
    avatar: string;
    userName: string;
    feed: StaticImageData;
    caption: string;
    likes: number;
    comments: { user: string; name: string; comment: string }[];
    time: string;
    tags: string[];
  };
};
const Feed = ({ feed }: PROPS) => {
  const [showFllCaption, setShowFullCaption] = useState(false);
  const [fullCaption, setFullCaption] = useState(feed.caption);
  const toggleCaption = () => {
    setShowFullCaption(!showFllCaption);
  };
  const filterCaption = () => {
    if (showFllCaption) {
      return setFullCaption(feed.caption);
    }
    if (feed.caption.length > 50) {
      return setFullCaption(feed.caption.slice(0, 50) + "...");
    }
    return setFullCaption(feed.caption);
  };
  useEffect(() => {
    filterCaption();
  }, [showFllCaption]);
  return (
    <div className="bg-white p-6 rounded-md">
      <div className="flex gap-6">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          src={feed.avatar}
          alt="sampel-profile"
        />
        <div>
          <h3 className="font-semibold text-lg">{feed.userName}</h3>
          <p className="text-slate-500 text-base">
            {new Date(feed.time).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="pt-6">
        <p className="text-lg mb-2 font-medium">
          {fullCaption}
          {feed.caption.length > 50 && (
            <span
              className="text-sm font-semibold cursor-pointer text-blue-400"
              onClick={toggleCaption}
            >
              {feed.caption.length > 50 && showFllCaption
                ? " Show Less"
                : " Show More"}
            </span>
          )}
        </p>
        <Image
          className="max-h-[600px] w-full object-contain rounded-xl overflow-hidden cursor-pointer"
          width={100}
          height={100}
          src={feed.feed}
          alt="feed"
        />
        <div className="flex gap-4 pt-3 text-black/80">
          <div className="flex gap-2 cursor-pointer hover:bg-rose-300/30 transition-all px-3 py-2 rounded-lg">
            <Heart className="hover:text-red-500 transition-all" />
            <span>{feed.likes} Likes</span>
          </div>
          <div className="flex gap-2 cursor-pointer hover:bg-blue-300/30 transition-all px-3 py-2 rounded-lg">
            <MessageSquare />
            {feed.comments.length} Comments
          </div>
          <div className="flex gap-2 ml-auto cursor-pointer hover:bg-red-300/30 transition-all px-3 py-2 rounded-lg">
            <Forward />
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
