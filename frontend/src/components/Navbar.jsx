import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-center py-6 items-center w-[100%] relative">
      <div className=" text-3xl font-semibold absolute left-0">
        <Link to="/">Happyfy</Link>
      </div>
      <ul className=" flex justify-between w-[60%] max-w-[600px]">
        <Link to={"/"}>
            <li>Home</li>
        </Link>
        <Link to={"/meditate"}>
            <li>Meditation</li></Link>
        <Link to={"/mood"}>
            <li>Mood tracker</li></Link>
        <Link to={"/therapy"}>
            <li>Therapy</li></Link>
        <Link to={"/resource"}>
            <li>Resources</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
