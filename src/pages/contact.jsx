// pages/contact.js
import Map from "../components/Map";
import Layout from "@/components/Layout";

const Contact = () => {
  // Coordinates for the location in Harare, Zimbabwe
  const coordinates = [31.03287848853894, -17.785655417597766];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex py-8 flex-col items-center justify-center">
          <h4 className="text-sm font-bold">Get In Touch</h4>
          <h1 className="text-4xl mb-4">Contact Us</h1>
          <hr className="w-[60px] mb-6 border-4 rounded-full border-amber-800" />
          <div className="grid grid-cols-1 mx-2 md:mx-0 gap-5 md:grid-cols-3">
            <div className="bg-teal-50 p-10">
              <h1 className="text-2xl font-bold text-center">Patrick Kuona</h1>
              <h2 className="text-lg text-center">Executive Director</h2>
              <p className="text-center">+263772436447 / +263712634249</p>
              <p className="text-sm text-center italic">pkuona@purpose.co.zw</p>
            </div>
            <div className="bg-teal-50 p-10">
              <h1 className="text-2xl font-bold text-center">Kathy Gilbert</h1>
              <h2 className="text-lg text-center">Chief Executive Officer</h2>
              <p className="text-center">+263772428370</p>
              <p className="text-sm text-center italic">
                kgilbert@purpose.co.zw
              </p>
            </div>
            <div className="bg-teal-50 p-10">
              <h1 className="text-2xl font-bold text-center">
                Nomsa J Chigwada
              </h1>
              <h2 className="text-lg text-center">
                Business Development Manager
              </h2>
              <p className="text-center">+263774639809</p>
              <p className="text-sm text-center italic">nchigwada@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-6xl mx-auto md:pb-10 h-96 flex-col">
        <p className="text-center bg-amber-800 font-black text-white">
          7 Cambridge road Avondale, Harare.
        </p>
        <Map coordinates={coordinates} />
      </div>
    </Layout>
  );
};

export default Contact;
