import "../../Ai/Ai-global.css";
import { faArrowLeft, faBell, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "capitalize",
        padding: "1rem",
        background: "var(--darkest-background)",
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} style={{ width: "1rem" }} />
      <h3>ai assistant</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",

          gap: "1rem",
        }}
      >
        <div
          style={{
            background: "var(--light-background)",
            padding: "8px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FontAwesomeIcon icon={faStar} style={{ width: "1rem" }} />

          <p>free plan</p>
        </div>
        <FontAwesomeIcon icon={faBell} style={{ width: "1rem" }} />
        <div
          style={{
            borderRadius: "50%",
            background: "blue",
            height: "2rem",
            width: "2rem",
            display: "flex",
            alignContent: "center",
            placeContent: "center",
            // justifyContent: "center",
          }}
        >
          {/* suppose to hold user identification, mustly an image */}
          <h4>IF</h4>
        </div>
      </div>
    </header>
  );
}
export default Header;
