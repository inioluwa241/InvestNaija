"use client";

import { useState } from "react";
import OptionButton from "./OptionButton";
import classes from "./Options.module.css";

function Options() {
  const levelsList = ["all levels", "beginners", "intermediate", "advanced"];
  const activityList = [
    "all contents",
    "fun facts",
    "video courses",
    "article",
    "q&a section",
    "trading guide",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className={classes.first}>
        <div className={classes.levels}>
          {levelsList.map((each, index) => (
            <OptionButton
              style={{
                background:
                  activeIndex === index ? "var(--active-option)" : "#2d2d2d",
              }}
              key={index}
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {each}
            </OptionButton>
          ))}
        </div>

        <div>
          <div>
            <p>show completed</p>
          </div>
        </div>
      </div>

      <div className={classes.second}>
        {activityList.map((each, index) => (
          <OptionButton
            style={{
              background:
                activeIndex === index ? "var(--active-option)" : "#2d2d2d",
            }}
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            {each}
          </OptionButton>
        ))}
      </div>
    </section>
  );
}

export default Options;
