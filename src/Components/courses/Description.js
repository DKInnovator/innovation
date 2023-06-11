import { useState } from "react";

import classes from "./Description.module.css";
import OverView from "./desc/OverView";
import Curriculum from "./desc/Curriculum";
import Faq from "./desc/Faq";
import Instructor from "./desc/Instructor";

// Main Content of Course Page
const Description = (props) => {
  const [selectedOption, setSelectedOption] = useState("overview");

  const courseName = props.courseData.courseName;
  let description = props.courseData.courseDesc;
  let descLength = description.length;

  // Shows limited data in the description visible on top of the page
  if (descLength > 50) {
    description = description.substring(0, 150) + " [....]";
  }

  // Option Clicked Event Handler
  const optionClickHandler = (optionValue) => {
    setSelectedOption(optionValue);
  };

  // Classes for each option
  let OverViewOptionClass = "";
  let curriculumOptionClass = "";
  let instructorOptionClass = "";
  let faqOptionClass = "";

  if (selectedOption === "overview") {
    OverViewOptionClass = classes.active;
  }
  if (selectedOption === "curriculum") {
    curriculumOptionClass = classes.active;
  }
  if (selectedOption === "instructor") {
    instructorOptionClass = classes.active;
  }
  if (selectedOption === "faq") {
    faqOptionClass = classes.active;
  }

  // available options
  const availableOptions = (
    <ul className={classes.options}>
      <li className={OverViewOptionClass}>
        <button onClick={() => optionClickHandler("overview")}>OverView</button>
      </li>

      <li className={curriculumOptionClass}>
        <button onClick={() => optionClickHandler("curriculum")}>
          Curriculum
        </button>
      </li>

      <li className={instructorOptionClass}>
        <button onClick={() => optionClickHandler("instructor")}>
          Instructor
        </button>
      </li>

      <li className={faqOptionClass}>
        <button onClick={() => optionClickHandler("faq")}>FAQ</button>
      </li>
    </ul>
  );

  // intial Data(OverView Data) visble when page is initially rendered
  let showData = (
    <OverView
      data={props.courseData.overView}
      desc={props.courseData.courseDesc}
    />
  );

  // changes the visible data when user selects one of available options
  const showDataAssigner = () => {
    if (selectedOption === "curriculum") {
      showData = <Curriculum data={props.courseData.curriculum} />;
    }
    if (selectedOption === "instructor") {
      showData = <Instructor data={props.courseData.instructor} />;
    }
    if (selectedOption === "faq") {
      showData = <Faq data={props.courseData.faq} />;
    }
  };
  showDataAssigner();

  return (
    <>
      <div className={classes.desc}>
        <h1>{courseName}</h1>

        <p className={classes.descp}>{description}</p>

        {availableOptions}

        {showData}
      </div>
    </>
  );
};

export default Description;
