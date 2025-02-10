import { useEffect } from "react";
import s from "./Modal.module.css";
const Modal = ({ children, title = "Default modal", closeModal }) => {
  const handleBackDropClick = (e) => {
    // console.log("Target:", e.target);
    // console.log("Current target:", e.currentTarget);
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      console.log("мене закрили!");

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
  return (
    <div className={s.wrapper} onClick={handleBackDropClick}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={closeModal} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
