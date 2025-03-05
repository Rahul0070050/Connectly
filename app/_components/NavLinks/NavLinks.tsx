"use client";
import { sampleProfileURI } from "@/data/profile";
import {
  Bookmark,
  House,
  LayoutGrid,
  Send,
  ShoppingBag,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ closeSheet }: { closeSheet?: () => void }) => {
  const pathname = usePathname();
  const pName = pathname.split("/")[2];
  return (
    <ul className="flex flex-col gap-6">
      <Link href={"/user/feed"} onClick={closeSheet}>
        <li
          className={`flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md ${
            pName === "feed" ? "text-rose-400" : ""
          }`}
        >
          <House className="w-5" /> Feed
        </li>
      </Link>
      <Link href={"/user/chat"} onClick={closeSheet}>
        <li
          className={`flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md ${
            pName === "chat" ? "text-rose-400" : ""
          }`}
        >
          <Send className="w-5" /> Messages
        </li>
      </Link>
      <li
        className={`flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md ${
          pName === "explore" ? "text-rose-400" : ""
        }`}
      >
        <LayoutGrid className="w-5" /> Explore
      </li>
      <li
        className={`flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md ${
          pName === "marketplace" ? "text-rose-400" : ""
        }`}
      >
        <ShoppingBag className="w-5" /> Marketplace
      </li>
      <li
        className={`flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md ${
          pName === "groups" ? "text-rose-400" : ""
        }`}
      >
        <Users className="w-5" /> Groups
      </li>
      <li
        className={`flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md ${
          pName === "my-favorites" ? "text-rose-400" : ""
        }`}
      >
        <Bookmark className="w-5" /> My Favorites
      </li>
      <li className="flex items-center gap-3 font-semibold text-base cursor-pointer hover:text-rose-300 rounded-md">
        <Link href={"/user/profile"} className="">
          <div className="flex items-center gap-4">
            <Image
              className="rounded-full"
              width={30}
              height={30}
              src={sampleProfileURI}
              alt="Profile"
            />
            <h1 className="text-xl font-semibold">Rahul OR</h1>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
