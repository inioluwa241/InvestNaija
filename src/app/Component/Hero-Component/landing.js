"use client";
import { useRouter } from "next/navigation";
import NavBar from "./NavBar";
import Hero from "./Hero";
import MidSection from "./MidSection";
import Feature from "./Feature";
import Testimonials from "./Testimonials";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import Head from "next/head";

function landing() {
  const router = useRouter();

  return (
    <section className="bg-gray-900">
      {/*Nav Bar */}
      <section>
        <Head>
          <link rel="icon" href="/InvestNaija/public/favicon32.png" />
        </Head>

        <NavBar />
      </section>

      {/* Hero Section */}
      <section className="flex flex-col  items-center w-full bg-gray-100 py-12">
        <Hero />
      </section>
      {/* MidSection */}
      <section>
        <MidSection />
      </section>
      {/* OUR fEATURES */}
      <section
        style={{ paddingBlock: "6rem", paddingInline: "5rem" }}
        className="flex flex-col justify-center items-center gap-10 bg-gray-100 w-full"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            HOW IT WORKS
          </h2>
          <p className="w-150 text-xl font-regular text-center text-gray-600">
            Get started in just three simple steps and begin your journey to
            financial literacy and smart investing.
          </p>
        </div>
        <div
          style={{ marginTop: "5rem" }}
          className="flex justify-center items-center gap-8"
        >
          <Feature
            number="01"
            title="Create an account"
            text="Sign up for free in minutes with our streamlined onboarding process and gain access to a world of financial knowledge and tools."
          />
          <Feature
            number="02"
            title="Learn the basics"
            text={` Access our comprehensive resources tailored to your experience level to understand the fundamentals of investing, from stocks to bonds and beyond.`}
          />
          <Feature
            number="03"
            title="Start investing"
            text={`Put your knowledge into practice with our user-friendly platform, where you can start investing in a variety of assets and track your progress.`}
          />
        </div>
      </section>

      {/*Testimonials*/}
      <section
        style={{ paddingBlock: "7.5rem", paddingInline: "5rem" }}
        className="flex flex-col justify-center gap-10 bg-gray-200 w-full"
      >
        <div className="flex items-center justify-between ">
          <h2 className="text-5xl font-bold text-center text-gray-800">
            Our Testimonials
          </h2>
          <p className="w-150 text-xl font-regular text-center text-gray-600">
            Hear from our community of investors who have transformed their
            financial futures with us.
          </p>
        </div>
        <div
          style={{ marginTop: "5rem" }}
          className="flex items-center justify-center gap-8"
        >
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col justify-center items-center w-full">
        <PreFooter />
        <div></div>
      </section>

      {/* Footer Section*/}
      <footer className="flex flex-col justify-center items-center w-full bg-gray-900 text-gray-300 py-12">
        <Footer />
      </footer>
    </section>
  );
}

export default landing;
