import Button from "./Button";
import classes from "./navbar.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <div className={classes.top_left_glow} />
      <div className={classes.bottom_right_glow} />
      <div className={classes.logo_div}>
        <h1>logo</h1>
      </div>
      <div className={classes.links_div}>
        <Link href={"/about"}>features</Link>
        <Link href={"/about"}>market</Link>
        <Link href={"/about"}>news</Link>
        <Link href={"/about"}>community</Link>
        <Link href={"/about"}>
          <Button
            style={{ background: "black", padding: "1rem" }}
            content="Get Started"
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
