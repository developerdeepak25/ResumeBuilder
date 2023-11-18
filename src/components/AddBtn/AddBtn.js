import React from "react";
import "./addBtn.scss";
import Plus from "../../vectors/Plus";

const AddBtn = ({ onClickFunc, placeholder }) => {
  return (
    <div className="add-edu-btn" onClick={onClickFunc}>
      <div className="add-icon">
        <Plus color="#00d856" width={10} />
      </div>
      {placeholder}
      {/* add Education */}
    </div>
  );
};

export default AddBtn;
