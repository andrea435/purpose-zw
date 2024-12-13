import React from "react";
import { CiLocationOn, CiPhone, CiTimer } from "react-icons/ci";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div
        className="bg-teal-950"
        // className="bg-cover bg-center"
        // style={{ backgroundImage: "url('/slider-1.jpg')" }}
      >
        <div className="text-white">
          <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl flex flex-col justify-center items-center mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-[#D09B49]">
                  Rated #1
                </p>
              </div>
              <h2 className="text-center tracking-wide max-w-lg mb-6 text-3xl font-bold leading-none text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-amber-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Welcome</span>
                </span>{" "}
                to Purpose Vunani Asset Management
              </h2>
              <p className="text-base  text-center text-white md:text-lg">
                Our team of experienced professionals is committed to delivering
                exceptional service and innovative strategies designed to grow
                your wealth.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="tel:+2638677110844"
                className="btn btn-wide btn-outline border rounded-none border-white text-white hover:bg-amber-700 hover:text-black"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
        <div className="relative bg-white  px-4 sm:px-0">
          <div className="absolute inset-0 bg-teal-950 h-1/2 rounded-b-[40px]" />
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start off-screen above
            animate={{ opacity: 1, y: 0 }} // Slide down to original position
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative border grid mx-auto overflow-hidden bg-teal-100 divide-y rounded-3xl border-amber-700 sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md"
          >
            <div className="inline-block p-8 text-center">
              <div className="flex items-center border border-amber-700 justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <CiLocationOn size={23} className="text-[#92692d]" />
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                7 Cambridge road <br />
                Avondale, Harare
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center border border-amber-700 justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <CiPhone size={23} className="text-[#92692d]" />
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                +263 867 711 0844 <br />
                +263 867 711 0850
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center border border-amber-700 justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <CiTimer size={23} className="text-[#92692d]" />
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Mon - Fri 8.00 - 17.00 <br />
                Sat - Sunday Closed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
