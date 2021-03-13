import React, { useEffect } from "react";

const BbbChildOne = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <div>this is bbb-child-one.</div>
      <div id="bbb-child-container" style={{ border: "1px" }}></div>
    </div>
  );
};

export default BbbChildOne;
