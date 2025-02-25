import React from "react";
import CreatePost from "../_components/CreatePost/CreatePost";
import FriendSuggestion from "../_components/FriendSuggestion/FriendSuggestion";

const User = () => {
  return (
    <section className="grid grid-cols-12 gap-9 p-9">
      <div className="col-span-8 min-h-screen">
        <CreatePost />
      </div>
      <div className="col-span-4 min-h-screen">
        <FriendSuggestion />
      </div>
    </section>
  );
};

export default User;
