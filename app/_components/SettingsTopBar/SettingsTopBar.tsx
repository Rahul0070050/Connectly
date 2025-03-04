"use client";
import React from "react";

const SettingsTopBar = ({ title }: { title: string }) => {
  return (
    <div className="overflow-auto scrollbar-hide">
      <ul className="text-lg flex">
        <li className={`p-2 px-5 flex border-b-4 border-blue-400`}>
          <h1>{title}</h1>
        </li>
      </ul>
    </div>
  );
};

export default SettingsTopBar;
