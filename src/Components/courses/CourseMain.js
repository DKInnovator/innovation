import { Link } from "react-router-dom";

import Description from "./Description";
import PurchaseSideBar from "./PurchaseSideBar";
import RelatedCourses from "./RelatedCourses";
import classes from "./CourseMain.module.css";

// Course Page Whole Data
const CourseMain = (props) => {
  return (
    <>
      {/* Course Navbar */}
      <div className={classes["course-navbar"]}>
        <Link to="/">Home</Link>/<p>{props.courseData.courseName}</p>
      </div>

      <div className={classes.main}>
        <Description courseData={props.courseData} />
        <div className={classes.sidebar}>
          <PurchaseSideBar courseData={props.courseData} />
          <RelatedCourses
            courseId={props.courseData.courseId || props.courseData.subCourseId}
          />
        </div>
      </div>
    </>
  );
};

export default CourseMain;
