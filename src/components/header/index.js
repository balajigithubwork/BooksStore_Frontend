import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-black w-full">
      <div className="py-5 w-11/12 m-auto flex justify-between text-blue-500">
        <h1 className="text-white font-bold text-2xl cursor-pointer">
          <span className="text-red-600">R</span>ohit
          <span className="text-red-600">B</span>ook
          <span className="text-red-600">H</span>ouse
        </h1>
        <nav className="hidden md:flex space-x-10">
          <Link to="/" className="text-white hover:text-red-600">
            Dashboard
          </Link>
          <Link to="/addbook" className="text-white hover:text-red-600">
            Add Books
          </Link>
          <Link to="/addbook" className="text-white hover:text-red-600">
            My Account
          </Link>
        </nav>
      </div>
    </div>
  );
};
