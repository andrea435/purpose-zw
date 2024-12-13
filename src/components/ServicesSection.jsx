import React from "react";
import { RiStockFill } from "react-icons/ri";
import {
  MdRealEstateAgent,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { RiChatPollFill } from "react-icons/ri";
import { GiCash } from "react-icons/gi";
import { FaPiggyBank } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const ServicesSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const features = [
    {
      name: "Cash Management",
      description:
        "Optimize your liquidity with our strategic cash management solutions designed to enhance your operational efficiency.",
      icon: GiCash,
    },
    {
      name: "Investment Advisory Services",
      description:
        "Benefit from expert guidance and personalized strategies to navigate the complexities of investment decisions.",
      icon: MdOutlineMiscellaneousServices,
    },
    {
      name: "Fixed Income Portfolio Management",
      description:
        "Secure your income stream with our robust fixed income strategies, designed to minimize risk and maximize returns.",
      icon: FaPiggyBank,
    },
    {
      name: "Alternative Trading Platform",
      description:
        "Access unique investment opportunities through our innovative alternative trading platform, tailored for discerning investors.",
      icon: RiChatPollFill,
    },
    {
      name: "Property Fund",
      description:
        " Invest in real estate with confidence through our diversified property fund, offering stability and growth potential.",
      icon: MdRealEstateAgent,
    },
    {
      name: "Stock Market Portfolio Management",
      description:
        "Maximize your equity investments with our active stock market portfolio management services, focused on achieving superior returns.",
      icon: RiStockFill,
    },
  ];
  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-600">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tailored Solutions for Your Financial Success
          </p>
          <p className="mt-6 text-sm text-gray-600">
            At Purpose Vunani Asset Management, we offer a range of services
            tailored to your financial needs. Our Cash Management solutions
            optimize liquidity, while Investment Advisory Services provide
            expert guidance.
          </p>
        </div>
        <div
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <motion.dl
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {
                transition: { staggerChildren: 0.3 },
              },
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
