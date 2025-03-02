import ChatHeader from "@/app/_components/ChatHeader/ChatHeader";
import ChatWindow from "@/app/_components/ChatWindow/ChatWindow";
import SendMessage from "@/app/_components/sendMessage/sendMessage";
import React from "react";

const Chat = () => {
  return (
    <div className="h-full relative bg-[#FBFBFB]">
      <ChatHeader />
      <ChatWindow />
      <SendMessage />
    </div>
  );
};

export default Chat;
