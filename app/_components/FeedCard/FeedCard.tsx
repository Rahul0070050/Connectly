import { EllipsisVertical, Forward, Heart, MessageSquare } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type FEED = {
  avatar: string;
  userName: string;
  feed: StaticImageData;
  caption: string;
  likes: number;
  comments: { user: string; name: string; comment: string }[];
  time: string;
  tag?: string[];
};
const FeedCard = ({ feed }: { feed: FEED }) => {
  return (
    <div className="p-4 border-1 shadow my-3 grid grid-cols-12 gap-3">
      <div className="col-span-2 cursor-pointer">
        <Image
          className="w-40 h-40 object-cover"
          width={100}
          height={100}
          src={feed.feed}
          alt="feed"
        />
      </div>
      <div className="col-span-10 flex flex-col justify-between">
        <div className="grid grid-cols-12 gap-1 justify-between cursor-pointer">
          <div className="col-span-11">
            <p className="text-lg">{feed.caption}</p>
          </div>
          <div className="col-span-1">
            <EllipsisVertical />
          </div>
        </div>
        <div className="">
          <span className="text-base">
            {new Date(feed.time).toLocaleDateString()}
          </span>
          <div className="flex gap-4 pt-1">
            <div className="flex gap-2 cursor-pointer hover:bg-gray-300/30 transition-all py-2 px-3 rounded-lg">
              <Heart className="hover:text-red-500 transition-all" />
              <span>{feed.likes} Likes</span>
            </div>
            <div className="flex gap-2 cursor-pointer hover:bg-gray-300/30 transition-all py-2 px-3 rounded-lg">
              <MessageSquare />
              {feed.comments.length} Comments
            </div>
            <div className="flex gap-2 ml-auto cursor-pointer hover:bg-gray-300/30 transition-all py-2 px-3 rounded-lg">
              <Forward />
              Share
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
