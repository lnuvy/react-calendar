import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Block = () => {
  const dispatch = useDispatch();
  const reduxTest = useSelector((state) => state.date);
  console.log(reduxTest);
  return (
    <div>
      <h1>Block</h1>
    </div>
  );
};

export default Block;
