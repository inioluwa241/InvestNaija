"use client";
import Header from "./Header";
import AiMain from "./AiMain";
import "../../Ai/Ai-global.css";
import AiInput from "./AiInput";
import { useState } from "react";
import SideBar from "../../DashBoardPage/Generic-Component/SideBar";

function AiCompo(props) {
  const [chatArr, setChatArr] = useState([]);

  // https://ai-integration-api.onrender.com

  const funct = (text) => {
    fetch("https://ai-integration-api.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return;
        }
      })
      .then((data) => {
        console.log(data.AIresponse);
        setChatArr((prev) => [
          ...prev,
          { question: text, reply: data.AIresponse },
        ]);
      });
    return text;
  };

  return (
    <section
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        background: "var(--lightest-background)",
      }}
    >
      <SideBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <AiMain chatArrObj={chatArr} />
        <AiInput onSendMessage={funct} />
      </div>
    </section>
  );
}

export default AiCompo;
