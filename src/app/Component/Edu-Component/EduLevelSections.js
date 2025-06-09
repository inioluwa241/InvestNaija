import { Fragment } from "react";
import CourseCard from "./CourseCard";

function EduLevelSection(props) {
  const color = props.color;
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
            gap: "12px",
            fontSize: "0.9rem",
          }}
        >
          <span
            style={{
              height: "0.9rem",
              width: "0.9rem",
              background: `rgb(${color})`,
              // background: color,
              borderRadius: "50%",
            }}
          />
          <h2
            style={{ textTransform: "capitalize" }}
          >{`${props.level} courses`}</h2>
          <p>(20 courses)</p>
        </div>
        <p style={{ color: "#5154d5", textTransform: "capitalize" }}>
          view all
        </p>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <CourseCard level={props.level} color={props.color} />
        <CourseCard level={props.level} color={props.color} />
        <CourseCard level={props.level} color={props.color} />
      </div>
    </Fragment>
  );
}

export default EduLevelSection;
