import React from "react";
import CreatePost from "../_components/CreatePost/CreatePost";

const User = () => {
  return (
    <section className="grid grid-cols-12 gap-10 p-10">
      <div className="col-span-8 min-h-screen">
        <CreatePost />
      </div>
      <div className="col-span-4 min-h-screen"></div>
    </section>
  );
};

export default User;
