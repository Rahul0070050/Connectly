"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const SettingsTopBar = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const selectedLink = pathname.split("/")[3];
  return (
    <div className="overflow-auto scrollbar-hide">
      <ul className="text-lg flex">
        <li
          className={`p-2 px-5 flex ${
            selectedLink == "my-profile" ? "border-b-4 border-blue-400" : ""
          }`}
        >
          <h1>{title}</h1>
        </li>
      </ul>
    </div>
  );
};

export default SettingsTopBar;
