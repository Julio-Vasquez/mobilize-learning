import React from "react";
import { useDrag, useDrop } from "react-dnd";

const RoadBox = props => {
  const style = {
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    cursor: "move",
    float: "left"
  };

  const [{ isDragging }, drag] = useDrag({
    item: { type: "box", value: props.value },
    collect: monitor => ({ isDragging: monitor.isDragging() })
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      <img src={props.url} alt="" width="60px" height="60px" />
    </div>
  );
};

const Dustbin = props => {
  const style = {
    height: "12rem",
    width: "12rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal",
    float: "left"
  };

  const [{ canDrop, isOver, res }, drop] = useDrop({
    accept: "box",
    drop: monitor => {
      console.log(
        `el valor del div ondrag is : ${monitor.value} === ${props.solution}`
      );
      return { res: monitor.value };
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "#f51";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  console.log(res);
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {isActive ? "Release to drop" : "Drag a box here"}
      {res}
    </div>
  );
};
export { RoadBox, Dustbin };
