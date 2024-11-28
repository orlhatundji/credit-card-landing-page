/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const items = [
  {
    title: "Support",
    description: `Need help navigating your developer perks? Our dedicated support team is always a click away, 
                  ready to ensure your credit card works as seamlessly as your code.`,
    icon: "/support.svg",
    extra_class: "",
  },
  {
    title: "Sales",
    description: `Streamline your purchases for tools, licenses, and services. With tailored rewards, this card 
                  transforms your developer expenses into growth opportunities.`,
    icon: "/chart.svg",
    extra_class: "md:border-l md:border-gray-200",
  },
  {
    title: "Onboarding",
    description: `Get started effortlessly with our developer-focused card. Sign up in minutes and unlock financial 
                  tools designed to simplify your professional journey.`,
    icon: "/onboard.svg",
    extra_class: "md:border-l md:border-gray-200",
  },
  {
    title: "Product",
    description: `From exclusive cashback on subscriptions to discounts on cloud services, our card is crafted to 
                empower developers and accelerate their innovation.`,
    icon: "/archive.svg",
    extra_class: "md:border-t md:border-gray-200",
  },
  {
    title: "Quality",
    description: `Built with developers in mind, our card combines intuitive design, top-notch security, and robust
               rewards for unmatched financial management.`,
    icon: "/folder-favorite.svg",
    extra_class: "md:border-l md:border-gray-200 md:border-t",
  },
  {
    title: "Result",
    description: `Track your spending, maximize savings, and reinvest in your craft. Our credit card ensures every 
                transaction takes you closer to your goals.`,
    icon: "/pie-chart.svg",
    extra_class: "md:border-l md:border-gray-200 md:border-t",
  },
];

const Features = () => {
  return (
    <section className="relative py-12 bg-white sm:py-16 lg:py-20">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img
          className="w-auto h-full rotate-180 opacity-25"
          src="/background-pattern.png"
          alt=""
        />
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl max-w-2xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl xl:leading-normal">
            Empowering Developers, Every Step of the Way
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 max-w-lg">
            Seamless solutions designed to support, reward, and elevate your
            development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {items.map((item, index) => (
            <div key={index} className={`md:p-8 lg:p-14 ${item.extra_class}`}>
              <Image
                src={item.icon}
                alt=""
                className="mx-auto"
                width={46}
                height={46}
              />
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-5 text-base text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
