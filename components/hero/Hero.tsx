"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

// Components
import Header from "../Header";
import { motion } from "framer-motion";
import Image from "next/image";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <div className="relative bg-gray-50">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img className="w-auto h-full" src="/background-pattern.png" alt="" />
      </div>

      <Header />

      <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl">
                  A special credit card made for Developers.
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Empowering developers with tailored rewards, seamless
                  financial management, and exclusive perks for tools you love.
                </p>

                <form action="#" method="POST" className="mt-8 sm:mt-10">
                  <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email address"
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                      required
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <button
                        type="submit"
                        className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 hover:bg-gray-600"
                      >
                        Get Free Card
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl">
                    2943
                  </p>
                  <p className="ml-3 text-sm text-gray-900">
                    Cards
                    <br />
                    Delivered
                  </p>
                </div>

                <div className="hidden sm:block">
                  <img src="/stripe-separator.svg" alt="" />
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl">
                    $1M+
                  </p>
                  <p className="ml-3 text-sm text-gray-900">
                    Transaction
                    <br />
                    Completed
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: false }}
              onViewportEnter={() => setIsInView(true)}
              onViewportLeave={() => setIsInView(false)}
            >
              {isInView && (
                <Image
                  className="w-full"
                  src="/cards-sm.png"
                  alt=""
                  onLoad={() => setIsLoaded(true)}
                  layout="responsive"
                  width={638}
                  height={563}
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
