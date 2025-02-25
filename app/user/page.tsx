import React from "react";
import CreatePost from "../_components/CreatePost/CreatePost";
import FriendSuggestion from "../_components/FriendSuggestion/FriendSuggestion";
import GroupSuggestion from "../_components/GroupSuggestion/GropuSuggestion";

const User = () => {
  return (
    <section className="grid grid-cols-12 gap-9 p-9">
      <div className="col-span-8 min-h-screen">
        <CreatePost />
      </div>
      <div className="col-span-4 h-fit sticky top-9">
        <div className="grid grid-cols-1 gap-9">
          <FriendSuggestion />
          <GroupSuggestion />
        </div>
      </div>
    </section>
  );
};

export default User;
