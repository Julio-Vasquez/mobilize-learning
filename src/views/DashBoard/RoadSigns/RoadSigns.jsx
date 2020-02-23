import React from "react";
import CardList from "./../../../components/admin/CardList";

import { RoadData } from "./../../../common/Data";

import "./RoadSigns.scss";

export default function RoadSigns() {
  return (
    <div className="card-list-rs">
      <CardList data={RoadData} module="roadsigns" />
    </div>
  );
}
