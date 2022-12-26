import React from "react";
import orange from "../assets/orange.png";
import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="shadow-xl navbar bg-darkBlue text-light ">
      <div className="flex-1">
        <a href="#" className="flex flex-row items-center text-2xl gap-x-3">
          <img src={orange} width="50" alt="" />
        </a>
        <a href="" className="flex">
          <span className="flex flex-row items-center ml-1 text-2xl  text-orange-400">
            Orange
          </span>
          <span className="flex flex-row items-center ml-1 text-2xl font-bold">
            Digital Center
          </span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="px-10 text-lg flex  gap-x-10 ">
          <li className="  hover:bg-primaryLight hover:rounded-lg">
            <a href="#" className="flex flex-row gap-x-2 items-center p-3  ">
              <AiOutlineHome />
              Home
            </a>
          </li>

          <li className="  hover:bg-primaryLight hover:rounded-lg">
            <a href="#" className="flex flex-row gap-x-2 items-center p-3">
              <AiOutlineUserAdd /> Add user
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
