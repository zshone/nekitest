import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={`${classes.backdrop} ${props.className}`}
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          className={props.backdropClassName}
          onClose={props.onClose}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={classes.modalWrapper}>
          <ModalOverlay className={props.modalClassName}>
            {props.children}
          </ModalOverlay>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
