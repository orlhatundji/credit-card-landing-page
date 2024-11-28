import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-white via-gray-50 to-white sm:py-16 lg:py-20 w-full">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="xl:flex xl:items-center xl:justify-between">
          <h2 className="text-xl font-bold text-center text-gray-400 xl:text-left font-pj">
            1000+ Big brands trust us
          </h2>

          <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
            <Image
              src="/brand-vertex.svg"
              alt=""
              className="mx-auto"
              width={179}
              height={35}
            />
            <Image
              src="/brand-square-stone.svg"
              alt=""
              className="mx-auto"
              width={186}
              height={35}
            />
            <Image
              src="/brand-martino.svg"
              alt=""
              className="mx-auto"
              width={175}
              height={35}
            />
            <Image
              src="/brand-waverio.svg"
              alt=""
              className="mx-auto"
              width={164}
              height={35}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
