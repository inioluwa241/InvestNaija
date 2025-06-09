"use client";
import { useRouter } from "next/navigation";

function Button(props) {
  const router = useRouter();

  const style = props.style;

  const goto = () => {
    router.push(props.link);
  };

  return (
    <button
      style={{
        borderRadius: "30px",
        padding: " 1rem 5rem",
        border: "0",
        ...style,
      }}
      onClick={goto}
    >
      {props.content}
    </button>
  );
}

export default Button;
