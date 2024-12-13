import HeroComp from "@/components/HeroComp";
import React from "react";
import Layout from "@/components/Layout";
import {
  FaBuilding,
  FaUsers,
  FaChartLine,
  FaAward,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

const Vunani = () => {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/vunani", label: "Vunani" },
  ];
  const features = [
    {
      icon: <FaBuilding className="text-teal-600" />,
      text: "One of the oldest existing independent black owned investment banks in South Africa",
    },
    {
      icon: <FaUsers className="text-teal-600" />,
      text: "The only BEE advisory firm with equity sponsor and equity distribution capabilities",
    },
    {
      icon: <FaUsers className="text-teal-600" />,
      text: "More than 100 employees with offices in Johannesburg, Cape Town and Harare",
    },
    {
      icon: <FaAward className="text-teal-600" />,
      text: "Highly experienced and eclectic team with more than 100 years combined corporate finance experience",
    },
    {
      icon: <FaChartLine className="text-teal-600" />,
      text: "Team has executed over 30 Johannesburg Stock Exchange (JSE) listings",
    },
    {
      icon: <FaAward className="text-teal-600" />,
      text: "Vunani’s corporate finance team has been ranked in the top 10 of Corporate advisors (2008-2011) according to Deal Makers magazine by number of M&A Deals completed",
    },
    {
      icon: <FaRegMoneyBillAlt className="text-teal-600" />,
      text: "Debt Underwriters (2008-2012) according to Bloomberg League tables",
    },
    {
      icon: <FaChartLine className="text-teal-600" />,
      text: "Asset management business with over R16 billion of institutional funds under management",
    },
    {
      icon: <FaChartLine className="text-teal-600" />,
      text: "Financial Mail Magazine rated equity analysts offering original research coverage of JSE companies",
    },
  ];
  return (
    <Layout>
      <HeroComp
        image="slider-1.jpg"
        title="Introduction to Vunani Limited"
        tagline="Your success starts here."
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen flex pb-10 flex-col items-center ">
        <div className="w-full max-w-4xl mx-3 p-6 mt-10 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-teal-600 text-center mb-6">
            Vunani Limited
          </h1>

          {/* Image Section */}
          <img
            src="/vunani.jpg" // Replace with your image path
            alt="Vunani Limited"
            className="w-full h-[300px] object-repeat rounded-lg mb-6"
          />

          {/* Features List */}
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-lg text-gray-700">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Vunani;
