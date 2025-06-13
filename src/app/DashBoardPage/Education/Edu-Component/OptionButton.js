function OptionButton(props) {
  const style = props.style;
  return (
    <div
      style={{
        background: "#2d2d2d",
        borderRadius: "20px",
        padding: "10px 13px",
        textTransform: "capitalize",
        ...style,
      }}
      id={props.key}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default OptionButton;
