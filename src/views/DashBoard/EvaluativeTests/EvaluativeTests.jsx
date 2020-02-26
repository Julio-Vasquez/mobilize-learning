import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import { RoadBox, Dustbin } from "./../../../components/admin/DragAndDrop";
import { DataDnd } from "./../../../common/Data";

export default function EvaluativeTests() {
  return (
    <DndProvider backend={Backend}>
      <div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Dustbin solution="preventiva" />
        </div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          {DataDnd.map((item, key) => (
            <RoadBox {...item} key={key} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}
