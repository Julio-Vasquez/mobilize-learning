import React from "react";
import { useParams } from "react-router-dom";

import SpecificTheme from "./../../../components/admin/SpecificTheme";

import { RoadData, Titles } from "./../../../common/Data";

export default function SpecificRoad() {
  const { data } = useParams();

  const Data = RoadData.find(item => item.url === data);
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
