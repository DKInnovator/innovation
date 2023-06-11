import { BsFillCheckCircleFill as TickMark } from "react-icons/bs";

import classes from "./OverView.module.css";

// Course OverView Content
const OverView = (props) => {
  const description = props.desc;
  const highlights = props.data.highLights;
  const requrements = props.data.requirements;
  const targetAudience = props.data.targetAudience;

  const courseHighlights = (
    <ul>
      {highlights.map((highlight, id) => (
        <li key={id}>
          <TickMark
            size={15}
            color="#4a8f9f"
            style={{ marginRight: "0.5rem", width: "max-content" }}
          />
          {highlight}
        </li>
      ))}
    </ul>
  );

  const courseRequirements = (
    <ul>
      {requrements.map((requirement, id) => (
        <li key={id}>{" " + requirement}</li>
      ))}
    </ul>
  );

  const courseAudience = (
    <ul>
      {targetAudience.map((Audience, id) => (
        <li key={id}>{" " + Audience}</li>
      ))}
    </ul>
  );

  return (
    <section className={classes.overview}>
      <p className={classes.desc}>{description}</p>

      <section className={classes.highLights}>
        <h3>What you'll learn</h3>
        {courseHighlights}
      </section>

      <section className={classes.requirements}>
        <h3>Requirements</h3>
        {courseRequirements}
      </section>

      <section className={classes.audience}>
        <h3>Target Audience</h3>
        {courseAudience}
      </section>
    </section>
  );
};

export default OverView;
