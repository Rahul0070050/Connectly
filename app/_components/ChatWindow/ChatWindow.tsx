"use client";
import { chats } from "@/data/chat";
import React, { useEffect, useRef } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";

const ChatWindow = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatContainerRef.current?.scrollIntoView({ behavior: "auto" });
  }, []);

  return (
    <div className="overflow-auto h-[calc(100vh-225px)] scrollbar-hide">
      <div className="flex flex-col gap-4 p-5">
        {chats.map((chat, index) => (
          <ChatMessage key={index} chat={chat} />
        ))}
        <div ref={chatContainerRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
