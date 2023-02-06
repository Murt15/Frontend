import React from "react";
import ReactDom from "react-dom";
import "./Notification.css";
const Backdrop = (props) => {
  return (
    <div className="error-div">
      <h1>Error Message</h1>
      <p>{props.msg}</p>
      <button onClick={props.onConfirm}>Close</button>
    </div>
  );
};
const Notification = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop props={props} />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};
export default Notification;
