"use client";

import "../../Ai/Ai-global.css";

import { useState } from "react";

function AiInput(props) {
  const [focused, setFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const submitHandler = (e) => {
    console.log(searchInput);
    e.preventDefault();
    props.onSendMessage(searchInput);
    setSearchInput(" ");
  };
  const onchangeHandler = (e) => {
    const text = e.target.value;
    setSearchInput(text);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "2rem",
        background: "var(--darkest-background)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          width: "100%",
          justifySelf: "center",
          alignItems: "center",
          transform: "translateX(8%)",
        }}
        onSubmit={submitHandler}
      >
        <input
          className={`${focused ? "focus" : ""}`}
          placeholder="Ask about finance, trading, stock, or your portfolio..."
          value={searchInput}
          style={{
            border: "1px solid var(--border)",
            borderRadius: "25px",
            // transform: "translateX(-10%)",
            padding: "1rem",
            width: "70%",
          }}
          onChange={onchangeHandler}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
        />
      </form>
    </div>
  );
}

export default AiInput;
