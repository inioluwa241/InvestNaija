import Link from "next/link";
import classes from "./Active.module.css";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function LinkEle(props) {
  const pathname = usePathname();
  const linkText = props.label;
  const isActive = pathname.slice(1).toLowerCase() == linkText.toLowerCase();

  return (
    <Link
      href={props.link}
      style={{
        padding: "1rem 1rem",
        textTransform: "capitalize",
        fontSize: "1.2rem",
        width: "90%",
        borderRadius: "10px",
      }}
      className={isActive ? classes.active : ""}
    >
      {props.children}
    </Link>
  );
}

export default LinkEle;
