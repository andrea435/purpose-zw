// pages/investmentProcess.js

import React from "react";
import Layout from "@/components/Layout";
import {
  FaChartLine,
  FaClipboardList,
  FaShieldAlt,
  FaRegLightbulb,
} from "react-icons/fa";
import HeroComp from "@/components/HeroComp";

const InvestmentProcess = () => {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/investment-process", label: "Our Investment Process" },
  ];
  return (
    <Layout>
      <HeroComp
        image="slider-3-2.jpg"
        title="Our Investment Process"
        tagline="Your success starts here."
        breadcrumbs={breadcrumbs}
      />
      <div className="p-6 max-w-5xl mx-auto">
        <img
          src="/investment-process.png"
          alt="Investment Process"
          className="w-full object-cover rounded-lg mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Screening Section */}
          <div className="bg-white border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaClipboardList className="mr-2 text-teal-600" /> Screening
            </h2>
            <p>
              PVAM carries out extensive quantitative and qualitative screening
              of investment securities, holding daily meetings to discuss
              opportunities and allocate tasks.
            </p>
          </div>

          {/* Research Section */}
          <div className="bg-white border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaRegLightbulb className="mr-2 text-teal-600" /> Research
            </h2>
            <p>
              Rigorous due diligence covering management strength, balance
              sheet, earnings quality, industry structure, and ESG review, along
              with extensive bottom-up valuations.
            </p>
          </div>

          {/* Portfolio Construction Section */}
          <div className="bg-white border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaChartLine className="mr-2 text-teal-600" /> Portfolio
              Construction
            </h2>
            <p>
              Recommended securities are considered based on top-down views,
              portfolio characteristics, sector correlation, and monthly reviews
              to ensure oversight.
            </p>
          </div>

          {/* Risk Management Section */}
          <div className="bg-white border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaShieldAlt className="mr-2 text-teal-600" /> Risk Management
            </h2>
            <p>
              Continual assessment of macro-economic conditions and investment
              performance, with scenario analysis to monitor changes in clients'
              liquidity needs.
            </p>
          </div>
        </div>

        {/* Implementation Section */}
        <div className="bg-white border p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaClipboardList className="mr-2 text-teal-600" /> Implementation
          </h2>
          <p>
            Involves asset allocation and security selection to construct and
            rebalance client portfolios as needed, incorporating new investment
            vehicles.
          </p>
        </div>

        {/* Stock Market Portfolio Management Section */}
        <div className="bg-white border p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaChartLine className="mr-2 text-teal-600" /> Stock Market
            Portfolio Management
          </h2>
          <p>
            We offer discretionary (DS) and non-discretionary (NDS) stock
            portfolio management, focusing on fundamental research and extensive
            macro, technical, and quantitative analysis.
          </p>
          <ul className="list-disc px-6 my-6">
            <li>
              PVAM do equity investment based on fundamental research entails
              evaluating company earnings growth.{" "}
            </li>
            <li>
              Our team of analyst do extensive macro, technical and quantitative
              analysis to identify better buy, hold and sell stocks.
            </li>
            <li>
              PVAM relies on other types of research to assess market trends.
              Our macro analysts focus on broad economic measures, including
              interest rates, inflation, employment, and the money supply.
            </li>
            <li>
              Our technical analysts use stock price charts to capture market
              developments.
            </li>
            <li>
              PVAM Quantitative analysts develop models to gain a deeper
              understanding of the portfolios, to identify the risks within, and
              to generate investment ideas. With access to this complementary
              information, the portfolio managers exercise their independent
              judgment in making their investment decisions.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default InvestmentProcess;
