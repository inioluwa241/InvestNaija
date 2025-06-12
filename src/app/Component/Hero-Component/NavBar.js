import Button from "../Generic-Component/Button";
import classes from "./navbar.module.css";
import Link from "next/link";

import React, { useState, useEffect } from "react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return(
     <nav
     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}
     style={{padding: "2rem" }}
      >
        <div className="container mx-auto p-36 flex justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
             <img
             src="/images/logo.png"
              alt="InvestNaija Logo"
              className="h-8.5 w-8.5 "
              style={{ verticalAlign: "middle" }}
             />
             <p className="text-3xl font-bold text-[var(--primary)] mr-4" >InvestNaija</p>
          </div>
          <div className="hidden md:flex gap-16 items-center space-x-8">
            <ul className="flex gap-8 items-center">
              <li className="text-gray-500 hover:text-[var(--primary)] transition-colors cursor-pointer whitespace-nowrap">
                <Link href="/features">Features</Link>
              </li>
              <li className="text-gray-500 hover:text-[var(--primary)] transition-colors cursor-pointer whitespace-nowrap">
                <Link href="/how-it-works">How It Works</Link>
              </li>
              <li className="text-gray-500 hover:text-[var(--primary)] transition-colors cursor-pointer whitespace-nowrap">
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <li className="text-gray-500 hover:text-[var(--primary)] transition-colors cursor-pointer whitespace-nowrap">
                <Link href="/aboutus">About Us</Link>
              </li>
            </ul>
           { /* Buttons */}
            <div className="hidden md:flex gap-4">
              <button 
              style={{paddingBlock: ".75rem", paddingInline:"2rem"}} className="bg-gray-200 text-gray-800 rounded-lg hover:bg-[var(--primary)] hover:text-white hover:font-semibold transition-colors !rounded-button cursor-pointer whitespace-nowrap"
              >
             <Link href="../signUp-IN/login">Login</Link>
            </button>
            <button 
            style={{paddingBlock: ".75rem", paddingInline:"2rem"}} className="bg-[var(--primary)] text-white rounded-lg hover:bg-gray-100 hover:text-[var(--primary)] hover:font-semibold transition-colors !rounded-button cursor-pointer whitespace-nowrap"
            >
            <Link href="../signUp-IN/signUp">Sign Up</Link>
            </button>
            </div>
          </div>
          <button className="md:hidden text-gray-700 focus:outline-none cursor-pointer whitespace-nowrap">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
  )
}

// function NavBar() {
//   return (
//     <nav>
//       <div className={classes.top_left_glow} />
//       <div className={classes.bottom_right_glow} />
//       <div className={classes.logo_div}>
//         <h1>logo</h1>
//       </div>
//       <div className={classes.links_div}>
//         <Link href={"/about"}>features</Link>
//         <Link href={"/about"}>market</Link>
//         <Link href={"/about"}>news</Link>
//         <Link href={"/about"}>community</Link>
//         <Link href={"/about"}>
//           <Button
//             style={{ background: "black", padding: "1rem" }}
//             content="Get Started"
//           />
//         </Link>
//       </div>
//     </nav>
//   );
// }

export default NavBar;
