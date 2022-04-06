import React from "react";
import { useDispatch, useSelector } from "react-redux";

const View = (props) => {
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.modal.currentId);

  return (
    <div>
      <h1>화면</h1>
    </div>
  );
};

export default View;
