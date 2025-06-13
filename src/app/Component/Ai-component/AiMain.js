"use client";
import { useEffect, useState } from "react";
import "../../Ai/Ai-global.css";
import AiInput from "./AiInput";
import WelcomeSection from "./WelcomeSecion";

function AiMain(props) {
  const [messagesArr, setMessageArr] = useState([]);
  console.log(props.textArrObj);
  const textArrObj = props.textArrObj;

  return (
    <section
      style={{
        padding: "2rem",
        background: "var(--lightest-background)",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
        flex: "1",
      }}
    >
      <WelcomeSection />
      <article
        style={{
          display: "flex",
          flexDirection: "row",
          // background: "red",
          minHeight: "4rem",
          padding: "2rem 0",
          flex: "1",
          // marginBottom: "13rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            marginBottom: "4rem",
          }}
        >
          {textArrObj
            ? textArrObj.map((message, index) => {
                return (
                  <p
                    key={index}
                    style={{
                      background: "blue",
                      padding: "1rem 1.3rem",
                      alignSelf: "flex-end",
                      borderRadius: "25px",

                      // display: "inline",
                      // position: "fixed",
                      // top: "0",
                      // right: "0",
                    }}
                  >
                    {message.text}
                  </p>
                );
              })
            : ""}
        </div>
      </article>
    </section>
  );
}

export default AiMain;
