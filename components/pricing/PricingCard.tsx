import Image from "next/image";
import React from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  buttonLabel: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  buttonLabel,
}) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-700 bg-white rounded-lg border border-gray-200 shadow hover:shadow-2xl hover:scale-105 hover:cursor-grab">
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="font-light text-gray-600 sm:text-lg">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold text-gray-900">
          ${price}
        </span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Image src="/check.svg" alt="" width={20} height={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
      >
        {buttonLabel}
      </a>
    </div>
  );
};

export default PricingCard;
