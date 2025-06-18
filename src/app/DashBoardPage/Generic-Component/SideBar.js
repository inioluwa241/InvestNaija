"use client";
// import classes from "./Active.module.css";
// import LinkEle from "./Link";
import "../Education/MainEduPage/Education-global.css";
import { usePathname } from "next/navigation";
// import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faUsers,
  faChartLine,
  faWandSparkles,
  faGear
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  // const [active,setActive]=useState()
  const pathname = usePathname();
  const linkValue = pathname.slice(1);

  const goTo = (event) => {
    event.preventDefault();
    const linkText = event.currentTarget.textContent.toLowerCase();
    const isActive = pathname.slice(1).toLowerCase() == linkText;
  };


  return(
    <nav  
    style={{padding:"2rem .75rem", width:"15rem"}}
    className="flex flex-col items-start justify-start bg-[#1a1a1a] text-white rounded-lg border-[#1a1a1a] h-screen overflow-hidden shadow-lg border-r border-light">
      {/* Logo and Name */}
      <div 
      style = {{marginBottom:"2rem"}}
      className="flex items-start justify-start mb-4">
        <img
          src="/images/logo.png"
          alt="InvestNaijaLogo"
          style={{ width: "30px", height: "30px", marginBottom: "1rem" }}
        />
        <h1 className="text-[var(--primary)] text-2xl font-bold">
          InvestNaija
        </h1>
      </div>
      <ul className="flex flex-col gap-3.5 w-full">
        <li
          style={{ padding: "10px 15px" }}
          className="w-full hover:bg-[var(--primary)] rounded-lg transition-colors"
        >
          <FontAwesomeIcon
            className="text-white"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            icon={faHome}
          />
          <Link href="../../DashBoardPage/DashBoard/MainPage">Dashboard</Link>
        </li>
        <li
          style={{ padding: "10px 15px" }}
          className="w-full hover:bg-[var(--primary)] rounded-lg transition-colors"
        >
          <FontAwesomeIcon
            className="text-white"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            icon={faChartLine}
          />
          <Link href="../../DashBoardPage/Portfolio">Portfolio</Link>
        </li>
        <li
          style={{ padding: "10px 15px" }}
          className="w-full hover:bg-[var(--primary)] rounded-lg transition-colors"
        >
          <FontAwesomeIcon
            className="text-white"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            icon={faUsers}
          />
          <Link href="../Community">Community</Link>
        </li>
        <li
          style={{ padding: "10px 15px" }}
          className="w-full hover:bg-[var(--primary)] rounded-lg transition-colors"
        >
          <FontAwesomeIcon
            className="text-white"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            icon={faBook}
          />
          <Link href="../../DashBoardPage/Education/MainEduPage">
            Education
          </Link>
        </li>
        <li
          style={{ padding: "10px 15px" }}
          className="w-full hover:bg-[var(--primary)] rounded-lg transition-colors"
        >
          <FontAwesomeIcon
            className="text-white"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            icon={faWandSparkles}
          />
          <Link href="../../Ai/">AI Assistant</Link>
        </li>
        <li
          style={{ padding: "10px 15px" }}
          className="w-full h-5 hover:bg-[var(--primary)] rounded-lg transition-colors"
        >
          <FontAwesomeIcon
            className="text-white"
            style={{ width: "20px", height: "20px", marginRight: "10px", marginTop:"100%"}}
            icon={faGear}
          />
          <Link href="#">Settings</Link>
        </li>
      </ul>
    </nav>
  );

  // return (
  //   <nav
  //     style={{
  //       background: "#1a1a1a",
  //       display: "flex",
  //       flexDirection: "column",
  //       padding: "1rem 0",
  //       alignItems: "center",
  //       width: "20%",
  //       height: "100vh",
  //       borderRight: "1px solid var(--light)",
  //       color: "white",
  //     }}
  //   >
  //     <div
  //     style={{ display: "flex", justifyContent: "start", alignItems: "start"}}
  //     >
  //     <img
  //       src="/images/logo.png"
  //       alt="logo"
  //       style={{ width: "30px", height: "30px", marginBottom: "1rem" }}
  //       />
  //       <h1  style={{ color: "var(--primary)" }}>
  //         InvestNaija

  //       </h1>
  //     </div>
  //     <LinkEle link="" label="dashboard" onClick={goTo}>
  //       Dashboard
  //     </LinkEle>
  //     <LinkEle link="" label="porfolio" onClick={goTo}>
  //       Porfolio
  //     </LinkEle>
  //     <LinkEle link="" label="fish" onClick={goTo}>
  //       Community
  //     </LinkEle>
  //     <LinkEle link="" label="education" onClick={goTo}>
  //       Education
  //     </LinkEle>
  //   </nav>
  // );
}

export default SideBar;
