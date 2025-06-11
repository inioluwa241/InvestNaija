"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";
import NavBar from "./NavBar";
import Feature from "./Feature";
import Testimonials from "./Testimonials";
import PreFooter from "./PreFooter";
import Footer from "./Footer";

function Hero() {
  const router = useRouter();

  return (
    <section >
      <NavBar />
      <section style={{ padding: "4rem 4rem", display: "flex" }}>
        <div>
          <h1
            style={{
              fontSize: "6rem",
              maxWidth: "60%",
              letterSpacing: "0",
              lineHeight: "1",
              display: "flex",
              alignSelf: "center",
            }}
          >
            Grow Your Money To Wealth
          </h1>
          <p
            style={{
              margin: "1rem 0 4rem 0",
              fontSize: "1.2rem",
              maxWidth: "40%",
            }}
          >
            The best place to gain financial insights and secure your future
          </p>
          <div
            style={{ display: "flex", gap: "1rem", margin: "4rem 0 2rem 0" }}
          >
            <Button
              content="Sign Up"
              style={{ background: "#9e9ad5", fontSize: "1.5rem" }}
              link="../signUp-IN/signUp"
            />
            <Button
              content="Login"
              style={{ background: "#89d0d2", fontSize: "1.5rem" }}
              link="../signUp-IN/login"
            />
          </div>
        </div>
        <div>{/* space for the image */}</div>
      </section>

      {/* MONITOR YOUR GROWTH */}
      <section className="flex flex-col" style={{padding: "0 4rem " }}>
        <div style={{ width: "60rem" }}></div>
        <div>
          <h5 style={{ textTransform: "uppercase", fontSize: "1.6rem" }}>
            Analytics
          </h5>
          <h1
            style={{
              textTransform: "capitalize",
              fontSize: "4rem",
              margin: "1rem 0",
            }}
          >
            Built-in analytics to track your growth
          </h1>
          <h4
            style={{
              fontSize: "1.3rem",
              maxWidth: "25rem",
              marginLeft: "2rem",
            }}
          >
            Use our built-in analyticsdashboard to pull valuable insight and
            monitor your own growth over time
          </h4>
          <Button
            style={{
              background: "#9e9ad5",
              fontSize: "1.5rem",
              padding: "1rem 2rem",
              marginTop: "3rem",
            }}
            content="View Your Progress"
          />
        </div>
      </section>

      {/* CHECK OUR STOCK PRICES */}
      <section
        className="flex flex-col"
        style={{ padding: "0 0rem ", marginTop: "9rem" }}
      >
        <div>
          <h5 style={{ textTransform: "uppercase", fontSize: "1.6rem" }}>
            Analytics
          </h5>
          <h1
            style={{
              textTransform: "capitalize",
              fontSize: "4rem",
              margin: "1rem 0 2rem 0",
            }}
          >
            Built-in analytics to track your growth
          </h1>
          <h4
            style={{
              fontSize: "1.3rem",
              maxWidth: "25rem",
              marginLeft: "2rem",
            }}
          >
            Use our built-in analyticsdashboard to pull valuable insight and
            monitor your own growth over time
          </h4>
          <Button
            style={{
              background: "#9e9ad5",
              fontSize: "1.5rem",
              padding: "1rem 2rem",
              marginTop: "4rem",
            }}
            content="View Stock Prices"
          />
        </div>
        <div style={{ width: "60rem" }}></div>

      {/* OUR fEATURES */}
        <section style={{paddingBlock: "6rem", paddingInline:"5rem"}} className="flex flex-col justify-center items-center gap-10 bg-gray-100 w-full">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-bold text-center text-gray-800">HOW IT WORKS</h2>
            <p className="w-150 text-xl font-regular text-center text-gray-600">Get started in just three simple steps and begin your journey to financial literacy and smart investing.</p>
          </div>
          <div style={{marginTop: "5rem"}} className="flex justify-center items-center gap-8">
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
        <section style={{paddingBlock: "7.5rem", paddingInline:"5rem"}} className="flex flex-col justify-center gap-10 bg-gray-200 w-full">
          <div className="flex items-center justify-between ">
            <h2 className="text-5xl font-bold text-center text-gray-800">Our Testimonials</h2>
            <p className="w-150 text-xl font-regular text-center text-gray-600">Hear from our community of investors who have transformed their financial futures with us.</p>
          </div>
          <div style={{marginTop:"5rem"}} className="flex items-center justify-center gap-8">
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
            <footer className="flex flex-col justify-center items-center w-full bg-gray-800 text-gray-300 py-12">
              <Footer/>
            </footer> 
    </section>
      </section>
  );
}

export default Hero;
