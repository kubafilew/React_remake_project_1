// import { useState } from "react";
import React from "react";

const Box = ({ isNew, id, name }) => {
  return (
    <div className="s3-button">
      {isNew ? <div className="dot"></div> : ""}
      <p className="section3-p">
        <p key={id}>
          {name} {isNew ? "(New)" : ""}
        </p>
      </p>
    </div>
  );
};

export default Box;
