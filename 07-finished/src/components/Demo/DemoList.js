import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    if (props.order === "Change to Asc Order") {
      return items.sort((a, b) => b - a);
    } else {
      return items.sort((a, b) => a - b);
    }
  }, [items, props.order]);
  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
