import classes from "./CourseCard.module.css";

function CourseCard(props) {
  const color = props.color;
  return (
    <div className={classes.card}>
      <div className={classes.card_image_container}>
        {/* suppose to hold an image */}
        <div className={classes.to_float}>
          <p
            style={{
              background: `rgba(${color},0.5)`,
              color: `rgba(${color},0.5)`,
            }}
          >
            {props.level}
          </p>
          <p style={{ background: "rgba(59,60,64,0.5)" }}>8:34</p>
        </div>
      </div>
      <div className={classes.second_child_div}>
        <div className={classes.course_type}>
          {/* icon */}
          <p>video course</p>
        </div>
        <h3>understanding how stock market work</h3>
        <p>
          Learn the fundamentals of stock markets, including key terminology,
          market mechanics,
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
