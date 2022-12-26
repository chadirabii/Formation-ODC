import React from "react";
import orange from "../assets/orange.png";

export default function Navbar() {
  return (
    <div className="shadow-xl navbar bg-lightBlue text-light ">
      <div className="flex-1">
        <a href="#" className="flex flex-row items-center text-2xl gap-x-3">
          <img src={orange} width="50" alt="" />
        </a>
        <a href="" className="flex">
          <span className="flex flex-row items-center ml-1 text-2xl font-bold text-orange-400">
            Orange
          </span>
          <span className="flex flex-row items-center ml-1 text-2xl font-bold">
            Digital Center
          </span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="px-10 text-lg menu menu-horizontal gap-x-3 ">
          <li className=" hover:bg-primaryLight">
            <a href="#">Home</a>
          </li>

          <li className="hover:bg-primaryLight ">
            <a href="#">Add user</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
