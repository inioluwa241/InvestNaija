"use client";
import { useRouter } from "next/navigation";
import Button from "../Generic-Component/Button";
import Feature from "./Feature";
import NavBar from "./NavBar";
import PreFooter from "./PreFooter";
// import Education from "../Edu-Component/Education";

function Hero() {
  const router = useRouter();

  return (
    <section style={{ padding: "2rem 8rem" }}>
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
              link="../../signUp-IN/signUp"
            />
            <Button
              content="Login"
              style={{ background: "#89d0d2", fontSize: "1.5rem" }}
              link="../../signUp-IN/login"
            />
          </div>
        </div>
        <div>{/* space for the image */}</div>
      </section>

      {/* MONITOR YOUR GROWTH */}
      {/* MONITOR YOUR GROWTH */}
      {/* MONITOR YOUR GROWTH */}
      <section style={{ display: "flex", padding: "0 4rem " }}>
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
        style={{ display: "flex", padding: "0 4rem ", marginTop: "9rem" }}
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
      </section>
      {/* OUR fEATURES */}
      {/* OUR fEATURES */}
      {/* OUR fEATURES */}

      <section
        style={{
          margin: "7rem 0",
          background: "linear-gradient(from left, black, red)",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "2rem",
            margin: "2rem 0 4rem 0",
          }}
        >
          {" "}
          our features
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Feature
            title="virtual stock trading simulator"
            text=" Buy/sell Nigerian stocks with virtual currency at simulated prices,
        Portfolio tracking with profit/loss updates"
          />
          <Feature
            title="learning modules"
            text={` Beginner friendly lessons on Financial concepts and terminolgies. Financial literacy contents tailored to nigerian context`}
          />
          <Feature
            title="glossary and definitions"
            text={`Definitions of financial terms for broader scope of knowlegde, Searchable words for self paced learning `}
          />
        </div>
        <Button
          content="view more"
          style={{
            margin: "3rem 0",
            display: "flex",
            justifySelf: "center",
            background: "#9e9ad5",
            fontSize: "1.5rem",
            padding: "1rem 2rem",
            textTransform: "capitalize",
          }}
        />
      </section>

      <section
        onClick={function goToEdu() {
          router.push("../Education");
        }}
      >
        <Button content="view education" />
      </section>

      {/* PREFOOTER */}
      {/* PREFOOTER */}
      {/* PREFOOTER */}
      <PreFooter />
    </section>
  );
}

export default Hero;
