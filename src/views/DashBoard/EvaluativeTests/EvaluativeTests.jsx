import React from "react";

import {
  TargetRoad,
  SourceRoad,
  TargetRoadEmpty
} from "./../../../components/admin/DragAndDrop";

import {
  SliderQuestion,
  RadioQuestion,
  MultipleQuestion,
  RadioGroupQuestion
} from "./../../../components/admin/Question";

import { DataDnd } from "./../../../common/Data";

export default function EvaluativeTests() {
  const cont = ["hola", "mundo", "prueba"];
  return (
    <div className="evaluative-test">
      <div>
        <div>
          <TargetRoad
            id="targetroad-1"
            className="target"
            title="Cual es una se;al informativa?"
          />
        </div>
        <div>
          <TargetRoadEmpty id="targetroad-2" className="targetempty">
            {DataDnd.map((item, key) => (
              <SourceRoad
                id={`card-${key}`}
                draggable="true"
                className="cardsr"
                cont={item}
                key={key}
              />
            ))}
          </TargetRoadEmpty>
        </div>
      </div>
      <div className="evaluative-test__types">
        <SliderQuestion title="seleccione la cantidad de se;ales de transito ..." />
        <RadioQuestion title="test" content={cont} />
        <MultipleQuestion
          title="hola que hace"
          content={cont}
          placeholder="seleccione"
        />
        <div style={{ width: "50%" }}>
          <RadioGroupQuestion title="multiple options" content={cont} />
        </div>
      </div>
    </div>
  );
}
