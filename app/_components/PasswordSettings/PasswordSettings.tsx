import { Input } from "@/components/ui/input";
import React from "react";
import Progress from "../Progress/Progress";

const PasswordSettings = () => {
  return (
    <div className="grid grid-cols-2 p-3">
      <div className="grid-cols-1 mb-2">
        <h5 className="text-slate-400 font-medium mb-1">Change Password</h5>
        <Input
          className="text-base px-2 py-1 rounded-md border-black/50 border-2 mb-3"
          placeholder="Current Password"
        />
        <Input
          className="text-base px-2 py-1 rounded-md border-black/50 border-2 mb-2"
          placeholder="New Password"
        />
        <Input
          className="text-base px-2 py-1 rounded-md border-black/50 border-2 mb-2"
          placeholder="Cunfirm Password Password"
        />
      </div>
      <div className="grid-cols-1">{/* <Progress /> */}</div>
    </div>
  );
};

export default PasswordSettings;
