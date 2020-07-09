import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Loading } from './../../../components/Loading';
import { courses } from './../../../services/course/actions';
import CardList from "./../../../components/admin/CardList";

export default function MobilityBehaviors() {
  const { loading, content } = useSelector(state => state.Courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(courses.getCourses('behaviorsdata'));
  }, [dispatch])

  return loading ? <Loading /> : (
    <div className="card-list-rs">
      <CardList data={content} module="mobilitybehaviors" />
    </div>
  );
}
