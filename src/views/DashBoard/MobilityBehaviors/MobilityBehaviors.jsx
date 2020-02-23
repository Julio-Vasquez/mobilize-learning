import React from "react";
import CardList from "./../../../components/admin/CardList";

import { BehaviorsData } from "./../../../common/Data";

export default function MobilityBehaviors() {
  return (
    <div className="card-list-rs">
      <CardList data={BehaviorsData} module="mobilitybehaviors" />
    </div>
  );
}
