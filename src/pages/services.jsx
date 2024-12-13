import Layout from "@/components/Layout";
import React from "react";
import HeroComp from "@/components/HeroComp";
import TabsComponent from "@/components/ServicesTabs";

const Services = () => {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
  ];
  return (
    <Layout>
      <HeroComp
        image="slider-4-2.jpg"
        title="Our Products and Services"
        tagline="Your success starts here."
        breadcrumbs={breadcrumbs}
      />
      <div className="py-10 max-w-6xl mx-auto">
        <TabsComponent />
      </div>
    </Layout>
  );
};

export default Services;
