import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import SpecificTheme from "./../../../components/admin/SpecificTheme";
import { Titles } from "./../../../common/Data";

export default function Specific() {
  const { data } = useParams();
  const { content } = useSelector(state => state.Courses);
  const { _id } = content
  console.log(_id)

  //con el title tengo que hacer el dispatch {content.title, id}
  const Data = content.find(item => item.url === data);
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
