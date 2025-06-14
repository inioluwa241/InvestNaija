"use client";
// import Ai from "@/app/Ai/page";
import Header from "./Header";
import AiMain from "./AiMain";
// import SideBar from "../Generic-Component/SideBar";
import "../../Ai/Ai-global.css";
import AiInput from "./AiInput";
import { useState } from "react";
import SideBar from '../../DashBoardPage/Generic-Component/SideBar'

function AiCompo(props) {
  const [messagesArr, setMessageArr] = useState("");
  // const [responseArr, setResponseArr] = useState("");

  const funct = (text) => {
    fetch("http://localhost:3003", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((res) => {
        if (res.ok) {
          // console.log(res);
          return res.json();
        } else {
          return;
        }
      })
      .then((data) => {
        setMessageArr(data.messagesArr);
        // setResponseArr(data.responseArr);
        // console.log(`the message is : while the reply is ${data.reply}`);
      });
  };

  return (
    <section
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        // flex: "1",
        background: "var(--lightest-background)",
      }}
    >
      {/* <SideBar /> */}
      <SideBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <AiMain messagesArrObj={messagesArr} />
        <AiInput onSendMessage={funct} />
      </div>
    </section>
  );
}

export default AiCompo;
