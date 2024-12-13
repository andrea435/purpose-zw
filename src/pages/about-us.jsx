import React from "react";
import Layout from "@/components/Layout";
import HeroComp from "@/components/HeroComp";
import Carousel from "@/components/Carousel";

const AboutUS = () => {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
  ];
  return (
    <Layout>
      <HeroComp
        image="slider-1.jpg"
        title="About Us"
        tagline="Here's what you need to know about Vunani Asset Management"
        breadcrumbs={breadcrumbs}
      />
      <div>
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">About Purpose Vunani</h1>
          <p className="mb-4">
            Working since <strong>2005</strong>, Purpose Vunani Asset Management
            is registered by the Reserve Bank of Zimbabwe as Purpose Asset
            Management (Private) Ltd.
          </p>
          <p className="mb-4">
            We commenced trading in <strong>January 2005</strong> and entered
            into a strategic relationship with Vunani Limited South Africa,
            rebranding to Purpose Vunani Asset Management in{" "}
            <strong>February 2013</strong>.
          </p>
          <h2 className="text-3xl font-semibold mt-6 mb-4">
            About Vunani Limited
          </h2>
          <p className="mb-4">
            Vunani Limited South Africa is a diversified financial services
            business listed on the Johannesburg Stock Exchange, specializing in
            the following disciplines:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Institutional & private client fund management</li>
            <li>Stockbroking</li>
            <li>Corporate Finance</li>
            <li>Property</li>
          </ul>
          <p className="mb-4">
            We work closely with Vunani Fund Managers and Vunani Private
            Clients, who offer a range of multi-asset, specialist equity,
            property, and bond funds in RSA, bringing the full range of products
            to Zimbabwe.
          </p>
          <p className="mb-4">
            Currently, we are registered by the Securities and Exchange
            Commission of Zimbabwe.
          </p>
        </div>
        <Carousel />
      </div>
    </Layout>
  );
};

export default AboutUS;
