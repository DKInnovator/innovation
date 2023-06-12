import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes["back-drop"]} onClick={props.onClose}></div>;
};

const ModalOverLay = (props) => {
  console.log("props", props);
  const modalClasses = [
    classes["modal-overlay"],
    props.className,
    props.showModal ? classes["modal-open"] : classes["modal-close"],

    // props.showModal === "entering"
    // ? classes["modal-open"]
    // : props.showModal === "exiting"
    // ? classes["modal-close"]
    // : null,
  ];
  console.log(modalClasses);

  return <div className={modalClasses.join(" ")}>{props.children}</div>;
};

const portalElement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverLay
          onClose={props.onClose}
          className={props.className}
          showModal={props.showModal}
        >
          {props.children}
        </ModalOverLay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
