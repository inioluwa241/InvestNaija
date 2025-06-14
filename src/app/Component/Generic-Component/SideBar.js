"use client";
// import classes from "./Active.module.css";
import LinkEle from "@/app/DashBoardPage/Generic-Component/Link";
import "../../DashBoardPage/Education/MainEduPage/Education-global.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

function SideBar() {
  // const [active,setActive]=useState()
  const pathname = usePathname();
  const linkValue = pathname.slice(1);

  const goTo = (event) => {
    event.preventDefault();
    const linkText = event.currentTarget.textContent.toLowerCase();
    const isActive = pathname.slice(1).toLowerCase() == linkText;
  };

  return (
    <nav
      style={{
        background: "#111111",
        display: "flex",
        flexDirection: "column",
        padding: "1rem 0",
        alignItems: "center",
        width: "17rem",
        height: "100vh",
        borderRight: "1px solid var(--light)",
        color: "white",
      }}
    >
      <h1 style={{ alignSelf: "flex-start", margin: "0 0 1.5rem 1rem" }}>
        logo
      </h1>
      <LinkEle link="" label="dashboard" onClick={goTo}>
        dashboard
      </LinkEle>
      <LinkEle link="" label="porfolio" onClick={goTo}>
        porfolio
      </LinkEle>
      <LinkEle link="" label="fish" onClick={goTo}>
        fish
      </LinkEle>
      <LinkEle link="../../Education" label="education" onClick={goTo}>
        education
      </LinkEle>
      <LinkEle link="../../Ai" label="ai assistance" onClick={goTo}>
        ai assistance
      </LinkEle>
    </nav>
  );
}

export default SideBar;
