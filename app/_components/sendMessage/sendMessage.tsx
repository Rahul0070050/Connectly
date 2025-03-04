import { Input } from "@/components/ui/input";
import { Link, Paperclip, Send } from "lucide-react";
import React from "react";

const SendMessage = () => {
  return (
    <div className="bg-gray-200 px-6 h-[72px] flex items-center gap-3 text-black/70">
      <Paperclip className="w-10 h-10 p-2 rounded-lg cursor-pointer hover:bg-blue-200" />
      <Input
        className="border border-slate-400 text-lg px-2 py-1 w-full"
        placeholder="Type something..."
      />
      <span className="bg-slate-400 text-white text-lg flex items-center py-1 px-2 rounded-lg cursor-pointer">
        Send
        <Send className="w-8 h-8 p-1" />
      </span>
    </div>
  );
};

export default SendMessage;
