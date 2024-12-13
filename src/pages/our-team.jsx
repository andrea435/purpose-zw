// pages/team.js

import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image"; // Import for optimized images
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing social icons
import HeroComp from "@/components/HeroComp";

const teamMembers = [
  {
    name: "Kathleen R.J. Gilbert",
    title: "Chief Executive Officer",
    description:
      "Kathy has vast banking experience earned whilst working for Barclays Bank and Merchant Bank of Central Africa Limited...",
    image: "/team1.jpg", // Update to your image path
    socialLinks: [
      { icon: <FaFacebook />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
  {
    name: "Patrick Kuona",
    title: "Executive Director",
    description:
      "Patrick began his banking career with the then Intermarket Discount House in 1999 as a trainee dealer...",
    image: "/team2.jpg", // Update to your image path
    socialLinks: [
      { icon: <FaFacebook />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
  // {
  //   name: "Ellistas B. Gapu",
  //   title: "Compliance Officer",
  //   description:
  //     "Ellistas is responsible for ensuring that the company adheres to regulatory standards...",
  //   image: "/team3.jpg", // Update to your image path
  //   socialLinks: [
  //     { icon: <FaFacebook />, link: "#" },
  //     { icon: <FaTwitter />, link: "#" },
  //     { icon: <FaLinkedin />, link: "#" },
  //     { icon: <FaGithub />, link: "#" },
  //   ],
  // },
  {
    name: "Nomsa J. Chigwada",
    title: "Business Development Manager",
    description:
      "Nomsa plays a pivotal role in driving the business forward and developing strategic partnerships.",
    image: "/team4.jpg", // Update to your image path
    socialLinks: [
      { icon: <FaFacebook />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
];

const TeamPage = () => {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/our-team", label: "Our Team" },
  ];
  return (
    <Layout>
      <HeroComp
        image="slider-1.jpg"
        title="Meet Our Team"
        tagline="Meet our experienced team dedicated to driving our mission forward."
        breadcrumbs={breadcrumbs}
      />
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Our Team
            </h2>
          </div>

          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {/* Longer Descriptions */}
            {teamMembers.slice(0, 2).map((member) => (
              <div
                key={member.name}
                className="items-center bg-teal-50 border border-gray-300 rounded-lg sm:flex "
              >
                <a href="#">
                  <img
                    className="w-full  rounded-lg object-cover ml-0 sm:ml-2 "
                    src={member.image}
                    alt={member.name}
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">{member.name}</a>
                  </h3>
                  <span className="text-gray-500 ">{member.title}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 ">
                    {member.description}
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    {member.socialLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.link}
                          className="text-gray-500 hover:text-gray-900 "
                        >
                          {link.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Shorter Descriptions */}
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {teamMembers.slice(2).map((member) => (
              <div
                key={member.name}
                className="items-center bg-teal-50 rounded-lg  sm:flex border border-gray-200"
              >
                <a href="#">
                  <img
                    className="w-full  rounded-lg object-cover ml-0 sm:ml-2 "
                    src={member.image}
                    alt={member.name}
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">{member.name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {member.title}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 ">
                    {member.description}
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    {member.socialLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.link}
                          className="text-gray-500 hover:text-gray-900 "
                        >
                          {link.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
