"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#043873] flex justify-between items-center px-6 lg:px-24 py-4">
      <div className="w-1/2">
        <Image src="./logo.svg" alt="Logo" width={150} height={100}/>
      </div>
      <div className="flex lg:justify-between items-center w-1/2 justify-end">
        <div className="hidden lg:flex items-center">
          <ul className="flex gap-10">
            <li className="text-white">
              <Link href="#">Products</Link>
            </li>
            <li className="text-white">
              <Link href="#">Solutions</Link>
            </li>
            <li className="text-white">
              <Link href="#">Resources</Link>
            </li>
            <li className="text-white">
              <Link href="#">Pricing</Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <button className="bg-[#FFE492] py-4 px-10 rounded-lg">Login</button>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#043873] bg-opacity-90 z-10 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center pt-20">
          <ul className="flex flex-col gap-10">
            <li className="text-white">
              <Link href="#">Products</Link>
            </li>
            <li className="text-white">
              <Link href="#">Solutions</Link>
            </li>
            <li className="text-white">
              <Link href="#">Resources</Link>
            </li>
            <li className="text-white">
              <Link href="#">Pricing</Link>
            </li>
          </ul>
          <div className="mt-10">
            <button className="bg-[#FFE492] py-4 px-10 rounded-lg">
              Login
            </button>
          </div>
        </div>

        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          X
        </button>
      </div>
    </header>
  );
};

export default Header;
