import React from "react";
import UserCard from "../Components/UserCard";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-10 gap-x-16 px-24 py-10 ">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      
    </div>
  );
}
