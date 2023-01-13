import "./Notification.css";
const Notification = (props) => {
  return (
    <div className="error-div">
      <h1>Error Message</h1>
      <p>{props.msg}</p>
      <button onClick={props.onConfirm}>Close</button>
    </div>
  );
};
export default Notification;
