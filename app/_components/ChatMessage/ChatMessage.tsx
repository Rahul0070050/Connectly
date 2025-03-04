"use client";
import { useAppSelector } from "@/store/hook";
import React from "react";

type PROPS = {
  chat: {
    id: number;
    senderId: number;
    message: string;
    time: Date;
    delivered: boolean;
    read: boolean;
  };
};
const ChatMessage = ({ chat }: PROPS) => {
  const { id } = useAppSelector((state) => state.user.user);
  return (
    <div
      className={`p-2 px-4 w-fit max-w-[500px]  rounded-2xl ${
        id === chat.senderId
          ? "ml-auto text-right text-white rounded-tr-none bg-slate-400"
          : "text-left rounded-tl-none bg-[#e4e8f7]"
      }
      ${chat.message.length < 30 ? "flex items-center gap-3" : ""}`}
    >
      <p className={`text-2lx ${id === chat.senderId ? "" : "text-black"}`}>
        {chat.message}
      </p>
      <span
        className={`text-sm ${
          id === chat.senderId
            ? "text-white/80"
            : chat.message.length < 30
            ? "order-first"
            : "order-last"
        }`}
      >
        {new Date(chat.time).toLocaleDateString()}
      </span>
    </div>
  );
};

export default ChatMessage;
