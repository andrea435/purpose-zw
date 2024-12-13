import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <Layout>
      {/* SEO Meta Tags */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Home</title>
        <meta name="description" content="Purpose Vunani Asset Management works closely with Vunani Fund Managers and Vunani Private Clients who offer a range of multi-asset, specialist equity, property and bond funds in RSA, to bring the full range of products to Zimbabwe." />
        <meta name="keywords" content="asset, management, purpose, vunani, zimbabwe" />
        <meta name="author" content="Purpose Vunani Asset Management" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Services Section */}
      <section>
        <ServicesSection />
      </section>

      {/* About Section */}
      <section className="bg-teal-950">
        <AboutSection />
      </section>

      {/* Testimonials Section */}
      <section></section>

      {/* Contact Details Section */}
      <section className="bg-teal-100">
        <div className="max-w-5xl mx-auto">
          <Contact />
        </div>
      </section>
    </Layout>
  );
}
