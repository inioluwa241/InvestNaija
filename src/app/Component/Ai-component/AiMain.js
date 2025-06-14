"use client";
import { useEffect, useState } from "react";
import "../../Ai/Ai-global.css";
import AiInput from "./AiInput";
import WelcomeSection from "./WelcomeSecion";

function AiMain(props) {
  const [messagesArr, setMessageArr] = useState(" ");
  console.log(props.messagesArrObj);
  // const messagesArrObj = props.messagesArrObj;
  // const responseArrObj = props.responseArr;
  // console.log(responseArrObj);

  const getIt = function (id) {
    fetch("http://localhost:3003", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => setMessageArr(data));
  };

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
      <WelcomeSection onclick={getIt} />
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
          <pre
            style={{
              margin: "0 0 2rem 0",
              fontFamily: "inherit",
              lineHeight: "1",
              whiteSpace: "pre-wrap",
              background: "var(--light-background)",
              maxWidth: "35rem",
              padding: "1rem 1.3rem",
              alignSelf: "flex-start",
              borderRadius: "25px",
            }}
          >
            {messagesArr}
          </pre>
          {/* {messagesArrObj
            ? messagesArrObj.map((message, index) => {
                const odd = index % 2 === 0;
                return (
                  <p
                    key={index}
                    style={{
                      background: "blue",
                      padding: "1rem 1.3rem",
                      alignSelf: odd ? "flex-end" : "flex-start",
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
            : ""} */}
        </div>
      </article>
    </section>
  );
}

export default AiMain;
