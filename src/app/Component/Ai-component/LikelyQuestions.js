import "../../Ai/Ai-global.css";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LikelyQuestions(props) {
  return (
    <div
      style={{
        background: "var(--light-background)",
        borderRadius: "10px",
        padding: "1rem",
        fontSize: "0.9rem",
        border: "1px solid var(--border)",
        cursor: "pointer",
      }}
      onClick={props.onclick}
      id={props.id}
    >
      <FontAwesomeIcon icon={faEarth} style={{ width: "1rem" }} />
      <h3 style={{ textTransform: "capitalize" }}>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
}
export default LikelyQuestions;
