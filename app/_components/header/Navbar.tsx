import { sampleProfileURI } from "@/data/profile";
import { Search, Sun } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white sticky top-0 h-24">
      <div className="flex items-center gap-4 rounded-md border border-slate-400 px-2">
        <Search className="text-slate-400" />
        <input
          className="outline-none text-lg p-1 px-0 w-96 text-slate-700 font-semibold"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center gap-5">
        <div>
          <Sun />
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Rahul OR</h1>
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src={sampleProfileURI}
            alt="Profile"
          />
          {/* image */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
