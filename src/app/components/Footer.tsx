import React from "react";
import Logo from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-24">
      <div className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div>
            <Image src={Logo} alt="Logo" />
          </div>
          <p className="text-sm">
            Whitespace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Overview
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Customer stories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Guides & tutorials
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Help center
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Media kit
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-white">
        ©2021 Whitespace LLC.
      </div>
    </footer>
  );
};

export default Footer;
