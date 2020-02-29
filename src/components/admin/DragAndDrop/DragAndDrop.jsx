import React from "react";

import "./style.scss";

const TargetRoad = props => {
  const Drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card-id");
    const card = document.getElementById(card_id);
    e.target.appendChild(card);
    //logic validation
  };

  const DragOver = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h4>{props.title}</h4>
      <div
        className={props.className}
        id={props.id}
        onDrop={Drop}
        onDragOver={DragOver}
      ></div>
    </div>
  );
};

const TargetRoadEmpty = props => {
  const Drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card-id");
    const card = document.getElementById(card_id);
    e.target.appendChild(card);
  };

  const DragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      className={props.className}
      id={props.id}
      onDrop={Drop}
      onDragOver={DragOver}
    >
      {props.children}
    </div>
  );
};

const SourceRoad = props => {
  const DragStart = e => {
    console.log(e.target);
    const target = e.target;
    e.dataTransfer.setData("card-id", target.id);
  };

  const DragOver = e => {
    e.stopPropagation();
  };

  return (
    <img
      src={props.cont.url}
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={DragStart}
      onDragOver={DragOver}
      alt={props.value}
    />
  );
};

export { TargetRoad, SourceRoad, TargetRoadEmpty };
