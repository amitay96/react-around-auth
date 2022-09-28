import React from "react";

const Popup = ({ isOpen, name, onClose, children }) => {
  return (
    <div
      className={`popup popup__type_${name} ${isOpen ? "popup__active" : ""}`}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button
          className={"popup__close-button"}
          type="button"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Popup;
