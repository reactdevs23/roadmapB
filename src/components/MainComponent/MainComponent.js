import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  heading,
  headingColor,
  title,
  titleColor,
  data,
  lineColor,
}) => {
  const roadmap = data.slice(0, 12);
  return (
    <div className={classes.mainContainer} style={{ "--lineColor": lineColor }}>
      <div className={classes.mainWrapper}>
        <div className={classes.header}>
          <h4 className={classes.heading} style={{ "--color": headingColor }}>
            {heading}
          </h4>{" "}
          <h2 className={classes.title} style={{ "--color": titleColor }}>
            {title}
          </h2>
        </div>
        <div
          className={`${classes.wrapper} ${classes.wrapper1} ${
            roadmap.length < 5 && classes[`noSideLine`]
          }  ${roadmap.slice(0, 4).length >= 4 && classes[`wrapper-wrap`]}`}
        >
          {roadmap.slice(0, 4).map((el, i) => (
            <div className={classes.box} key={i}>
              <div
                className={classes.iconContainer}
                style={{ "--bg": el.bg, "--border": el.border }}
              >
                <div className={classes.icon}>{el.icon}</div>
              </div>{" "}
              <p className={classes.info} style={{ "--color": el.infoColor }}>
                {el.info}
              </p>
            </div>
          ))}
        </div>
        <div
          className={`${classes.wrapper} ${classes.wrapper2} ${
            roadmap.length < 9 && classes[`noSideLine`]
          }  ${roadmap.slice(4, 8).length > 4 && classes[`wrapper-wrap`]}`}
        >
          {roadmap.slice(4, 8).map((el, i) => (
            <div className={classes.box} key={i}>
              <div
                className={classes.iconContainer}
                style={{ "--bg": el.bg, "--border": el.border }}
              >
                <div className={classes.icon}>{el.icon}</div>
              </div>{" "}
              <p className={classes.info} style={{ "--color": el.infoColor }}>
                {el.info}
              </p>
            </div>
          ))}
        </div>{" "}
        <div
          className={`${classes.wrapper} ${classes.wrapper3} ${
            classes[`noSideLine`]
          }  ${roadmap.slice(8, 12).length > 4 && classes[`wrapper-wrap`]}`}
        >
          {roadmap.slice(8, 12).map((el, i) => (
            <div className={classes.box} key={i}>
              <div
                className={classes.iconContainer}
                style={{ "--bg": el.bg, "--border": el.border }}
              >
                <div className={classes.icon}>{el.icon}</div>
              </div>{" "}
              <p className={classes.info} style={{ "--color": el.infoColor }}>
                {el.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
