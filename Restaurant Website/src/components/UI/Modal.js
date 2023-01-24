import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} />;
};
const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<BackDrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
