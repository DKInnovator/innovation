import React from "react";
import { useParams } from "react-router-dom";

import dummyCourses from "../store/coursesDummyData";
import CourseMain from "../Components/courses/CourseMain";

const Courses = () => {
  const incomingParams = useParams();

  // url parameters
  const courseId = incomingParams.id;
  const subCourseId = incomingParams.sid;
  let requestedCourse = {};

  // Main Course Details
  const course = dummyCourses.find((course) => course.courseId === courseId);

  // Sub Course Details
  let subCourse = {};
  if (course.subCourses) {
    subCourse = course.subCourses.find(
      (subCourse) => subCourse.subCourseId === subCourseId
    );
    subCourse = {
      ...subCourse,
      subCourse: null,
      courseId: subCourse.subCourseId,
    };

    requestedCourse = subCourse;
  } else {
    requestedCourse = course;
  }

  return (
    <div>
      <CourseMain courseData={requestedCourse} />
    </div>
  );
};

export default Courses;
