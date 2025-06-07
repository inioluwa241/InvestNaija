import Button from "./Button";

function PreFooter() {
  return (
    <div
      style={{
        padding: " 3rem 10rem",

        borderRadius: "25px",
        background: "linear-gradient(to right, #799ea7, #505597)",
      }}
    >
      <h2
        style={{
          textTransform: "uppercase",
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        are you ready?
      </h2>
      <h1
        style={{
          textTransform: "capitalize",
          color: "white",
          fontSize: "4rem",
          textAlign: "center",
          marginBottom: "1.5rem",
          maxWidth: "40rem",
          display: "flex",
          justifySelf: "center",
          lineHeight: "0.9",
        }}
      >
        be a part of the next big thing
      </h1>
      <Button
        style={{
          background: "black",
          textTransform: "uppercase",
          display: "flex",
          justifySelf: "center",
          fontSize: "1.5rem",
        }}
        content="get started"
      />
    </div>
  );
}

export default PreFooter;
