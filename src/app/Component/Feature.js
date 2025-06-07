function Feature(props) {
  const containerStyles = props.containerStyles;
  return (
    <div
      style={{
        background: "#3b3a59",
        padding: "2rem 8px",
        width: "30%",
        textAlign: "center",
        borderRadius: "12px",
      }}
    >
      <div style={{ height: "4rem" }}></div>
      <h2
        style={{
          textTransform: "capitalize",
          margin: "1rem 0",
        }}
      >
        {props.title}
      </h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Feature;
