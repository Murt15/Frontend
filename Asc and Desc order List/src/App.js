import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [listOrder, setListOrder] = useState("Change To Desc Order");
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const changelistHandler = () => {
    if (listOrder === "Change to Asc Order") {
      setListOrder("Change To Desc Order");
    } else {
      setListOrder("Change to Asc Order");
    }
  };

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} order={listOrder} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changelistHandler}>{listOrder}</Button>
    </div>
  );
}

export default App;
