import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import { RoadBox, Dustbin } from "./../../../components/admin/DragAndDrop";
import {
  SliderQuestion,
  RadioQuestion,
  MultipleQuestion
} from "./../../../components/admin/Question";

import { DataDnd } from "./../../../common/Data";

export default function EvaluativeTests() {
  const cont = ["hola", "mundo", "prueba"];
  return (
    <div className="evaluative-test">
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
      <div className="evaluative-test__types">
        <SliderQuestion title="seleccione la cantidad de se;ales de transito ..." />
        <RadioQuestion title="test" content={cont} />
        <MultipleQuestion
          title="hola que hace"
          content={cont}
          placeholder="seleccione"
        />
      </div>
    </div>
  );
}
