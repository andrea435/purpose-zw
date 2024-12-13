import React from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const refTop = React.useRef(null);
  const refBottom = React.useRef(null);
  const isInViewTop = useInView(refTop, { once: false });
  const isInViewBottom = useInView(refBottom, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and move up
      transition={{ duration: 2.0, ease: "easeInOut" }}
      className="p-4"
    >
      <section className="">
        <div className="gap-16 max-w-5xl mx-auto items-center py-8 px-6 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-white sm:text-lg ">
            <h2 className="mb-4 md:text-left text-center text-4xl tracking-tight font-extrabold text-white">
              About Our Company
            </h2>
            <p className="mb-4 italic md:text-left text-center text-sm">
              Registered by the Reserve Bnk of Zimbabwe as Purpose Asset
              Management (Private) Ltd (Licence Number 000012)
            </p>
            <p className="md:text-left text-center">
              We work closely with Vunani Fund Managers and Vunani Private
              Clients who offer a range of multi-asset, specialist equity,
              property and bond funds in RSA; to bring the full range of
              products to Zimbabwe. Currently registered by the Securities and
              Exchange Commission of Zimbabwe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.div
              ref={refTop}
              initial={{ opacity: 0, y: -50 }} // Start above
              animate={isInViewTop ? { opacity: 1, y: 0 } : {}} // Slide down to original position
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                className="w-full rounded-lg"
                src="/abt3.jpg"
                alt="office content 1"
              />
            </motion.div>
            <motion.div
              ref={refBottom}
              initial={{ opacity: 0, y: 50 }} // Start below
              animate={isInViewBottom ? { opacity: 1, y: 0 } : {}} // Slide up to original position
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="/abt1.jpg"
                alt="office content 2"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
