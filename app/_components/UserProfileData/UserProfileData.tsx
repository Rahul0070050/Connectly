import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserProfileData = () => {
  return (
    <div className="p-3 grid grid-cols-2">
      <div className="grid-cols-1 mb-2">
        <h5 className="text-slate-400 font-medium mb-1">Username</h5>
        <span className="text-xl">rahulor</span>
      </div>
      <div className="grid-cols-1 mb-2">
        <h5 className="text-slate-400 font-medium mb-1">Bio</h5>
        <span className="text-xl">Developer</span>
      </div>
      <div className="grid-cols-1 mb-2">
        <h5 className="text-slate-400 font-medium mb-1">First Name</h5>
        <span className="text-xl">Rahul</span>
      </div>
      <div className="grid-cols-1 mb-2">
        <h5 className="text-slate-400 font-medium mb-1">Last Name</h5>
        <span className="text-xl">O R</span>
      </div>
      <div className="grid-cols-1 mb-2">
        <h5 className="text-slate-400 font-medium mb-1">Email</h5>
        <span className="text-xl">rahulor2000@gmail.com</span>
      </div>
      <div className="grid-cols-1 mb-2">
        <h5 className="text-slate-400 font-medium mb-1">Phone</h5>
        <span className="text-xl">645565645</span>
      </div>
      <div className="grid-cols-1 mb-2">
        <h5 className="text-slate-400 font-medium mb-1">Gender</h5>
        <span className="text-xl">Male</span>
      </div>
      <div className="grid-cols-1 py-3">
        <Button className="ml-0 bg-blue-400">
          <Edit /> Edit
        </Button>
      </div>
      <div className="grid-cols-1 text-blue-500">
        <Link href={""}>Change Password</Link>
      </div>
    </div>
  );
};

export default UserProfileData;
