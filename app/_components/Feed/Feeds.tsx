import React from "react";
import Feed from "./Feed";
import { feeds } from "@/data/feed";

const Feeds = () => {
  return (
    <div className="flex flex-col gap-9 mt-9">
      {feeds.map((feed, index) => (
        <Feed key={index} feed={feed} />
      ))}
    </div>
  );
};

export default Feeds;
