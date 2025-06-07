function Button(props) {
  const style = props.style;
  return (
    <button
      style={{
        borderRadius: "30px",
        padding: " 1rem 5rem",
        border: "0",
        ...style,
      }}
    >
      {props.content}
    </button>
  );
}

export default Button;
