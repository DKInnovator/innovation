import classes from "./RelatedCourses.module.css";
import dummyCourses from "../../store/coursesDummyData";
import RelatedCourseItem from "./RelatedCourseItem";

// Related Courses sidebar
const RelatedCourses = (props) => {
  let coursesMainData = [];
  let relatedCourses = [];
  const currentCourseId = props.courseId;

  // extract main details of cources
  for (let course of dummyCourses) {
    let data = {
      id: course.courseId,
      name: course.courseName,
      image: course.image,
      price: course.netPrice,
    };
    if (course.subCourses) {
      for (let subCourse of course.subCourses) {
        let subData = {
          id: subCourse.subCourseId,
          name: subCourse.courseName,
          image: subCourse.image,
          price: subCourse.netPrice,
          parentCourseId: course.courseId,
        };
        coursesMainData.push(subData);
      }
      continue;
    }
    coursesMainData.push(data);
  }

  // construct diferent related course list based on current cource is main course or sub course
  if (/^c/.test(currentCourseId)) {
    relatedCourses = coursesMainData.filter(
      (course) => /^c/.test(course.id) && course.id !== currentCourseId
    );
  } else {
    relatedCourses = coursesMainData.filter(
      (course) => !/^c/.test(course.id) && course.id !== currentCourseId
    );
  }

  //final list will have max 3 related courses
  let limitedRelatedCourses = relatedCourses.slice(0, 3);

  const pathName = window.location.pathname;

  return (
    <section className={classes["relatedcourse-main"]}>
      <div className={classes.heading}>
        <h5>Related Course</h5>
      </div>
      <div className={classes["related-courses"]}>
        {limitedRelatedCourses.map((course, index) => (
          <RelatedCourseItem key={index} data={course} />
        ))}
      </div>
    </section>
  );
};

export default RelatedCourses;
