import "../../Ai/Ai-global.css";
import { faArrowLeft, faBell, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons";

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
        <div className="flex items-center">
                  <FontAwesomeIcon
                  className="text-white"
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                  icon={faWandSparkles}
                />
      <h3 className="text-2xl font-bold">AI Assistant</h3>
        </div>
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

          <p>Free Plan</p>
        </div>
        <FontAwesomeIcon icon={faBell} style={{ width: "1rem" }} />
      </div>
    </header>
  );
}
export default Header;
