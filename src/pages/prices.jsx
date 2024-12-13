import Layout from "@/components/Layout";
import React from "react";
import HeroComp from "@/components/HeroComp";

const PricingPage = () => {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/prices", label: "Fees" },
  ];
  return (
    <Layout>
      <HeroComp
        image="slider-1.jpg"
        title="Fees"
        tagline="Our Pricing Structure"
        breadcrumbs={breadcrumbs}
      />
      <div className="flex mt-6 flex-col items-center justify-center">
        <div className="border mb-6  shadow-md rounded-lg p-8 max-w-xl w-full">
          <h2 className="text-2xl font-semibold mb-4">Equities</h2>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 text-left text-gray-600">
                  Size of Investment
                </th>
                <th className="py-2 text-left text-gray-600">% Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">0 - 500,000</td>
                <td className="py-2">1.1%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">500,001 - 1,499,000</td>
                <td className="py-2">1.0%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">1,500,000 - 3,000,000</td>
                <td className="py-2">0.9%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">3,000,001 - 10,000,000</td>
                <td className="py-2">0.7%</td>
              </tr>
              <tr>
                <td className="py-2"> {">"} 10,000,000</td>
                <td className="py-2">0.5%</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold mt-6">Fixed Interest</h2>
          <p className="mt-2">Performance Fee of 10% of value created.</p>

          <a
            href="/contact"
            className="btn bg-teal-950 hover:bg-teal-100 hover:text-black rounded-none text-white btn-block mt-6"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
