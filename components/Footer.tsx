import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="row-start-3 w-full bg-gradient-to-tr from-slate-200 via-gray-100 to-slate-50 max-w-7xl">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  aria-hidden
                  src="/kardnode.svg"
                  alt="Window icon"
                  width={148}
                  height={30}
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Kardnode
                </span>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <span className="hover:underline">About</span>
                </li>
                <li>
                  <span className="hover:underline">Careers</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <span className="hover:underline ">Github</span>
                </li>
                <li>
                  <span className="hover:underline">Discord</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <span className="hover:underline">Privacy Policy</span>
                </li>
                <li>
                  <span className="hover:underline">
                    Terms &amp; Conditions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 <span className="hover:underline">Kardnode™</span>. All
            Rights Reserved.
          </span>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
