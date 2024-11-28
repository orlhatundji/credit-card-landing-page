import React from "react";
import PricingCard from "./pricing/PricingCard";

const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      description: "Perfect for solo developers starting their journey.",
      price: 29,
      features: [
        "Customized rewards for subscriptions and tools",
        "No setup or hidden fees",
        "User limit: 1 developer",
        "Priority support: 6 months",
        "Free updates: 6 months",
      ],
      buttonLabel: "Get started",
    },
    {
      title: "Team",
      description: "Ideal for growing teams managing shared expenses.",
      price: 99,
      features: [
        "Tailored cashback for team tools and services",
        "No setup or hidden fees",
        "User limit: 10 developers",
        "Priority support: 24 months",
        "Free updates: 24 months",
      ],
      buttonLabel: "Get started",
    },
    {
      title: "Enterprise",
      description: "The ultimate solution for large-scale organizations.",
      price: 499,
      features: [
        "Advanced rewards for enterprise-grade tools",
        "No setup or hidden fees",
        "User limit: 100+ developers",
        "Priority support: 36 months",
        "Free updates: 36 months",
      ],
      buttonLabel: "Get started",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-20">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Plans Tailored for Every Developer
          </h2>
          <p className="mb-5 font-light text-gray-600 sm:text-xl">
            Whether you&apos;re a solo developer, a growing team, or an enterprise,
            we&apos;ve got a plan designed for your needs. Unlock developer-centric
            perks and take your financial management to the next level.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};



export default Pricing;
