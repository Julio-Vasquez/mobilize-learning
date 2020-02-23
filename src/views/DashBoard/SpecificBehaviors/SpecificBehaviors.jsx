import React from "react";
import { useParams } from "react-router-dom";

import SpecificTheme from "./../../../components/admin/SpecificTheme";

import { BehaviorsData, Titles } from "./../../../common/Data";

export default function SpecificBehaviors() {
  const { data } = useParams();

  const Data = BehaviorsData.find(item => item.url === data);

  return (
    <SpecificTheme
      bg={Data.urlImg}
      cover={Data.urlImg}
      title={Data.title}
      description={Data.description}
      content={Titles}
    />
  );
}
