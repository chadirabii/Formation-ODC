import React from "react";
import orange from "../assets/orange.png";
import {
  AiOutlineHome,
  AiOutlineUserAdd,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="shadow-xl navbar bg-darkBlue text-light ">
      <div className="flex-1">
        <Link to="/" className="flex flex-row items-center text-2xl gap-x-3">
          <img src={orange} width="50" alt="" />
        </Link>
        <Link to="/" className="flex">
          <span className="flex flex-row items-center ml-1 text-2xl  text-orange-400">
            Orange
          </span>
          <span className="flex flex-row items-center ml-1 text-2xl font-bold">
            Digital Center
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-10 text-lg flex gap-x-8 ">
          <li>
            <Link to="/" className="flex flex-row gap-x-2 items-center p-3  ">
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/add" className="flex flex-row gap-x-2 items-center p-3">
              <AiOutlineUserAdd />
              Add User
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="flex flex-row gap-x-2 items-center p-3"
            >
              <AiOutlineInfoCircle />
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
