function Feature(props) {
  const containerStyles = props.containerStyles;
  return (
    <div
      style={{
        background: "#3b3a59",
        padding: "2rem 8px",
        width: "30%",
        textAlign: "center",
        borderRadius: "15px",
        boxShadow: "8px 20px 10px rgba(255, 255, 255, 0.05)",
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
      <p style={{ margin: "0 3.5rem" }}>{props.text}</p>
    </div>
  );
}

export default Feature;
