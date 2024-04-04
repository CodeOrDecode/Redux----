import React from "react";

const Todoitem = ({ title, status }) => {
  return (
    <div style={{border:"1px solid black", margin:"14px",padding:"14px"}}>
      <h2>{title}</h2>
      <button>{status ? "completed" : "pending"}</button>
    </div>
  );
};

export default Todoitem;
