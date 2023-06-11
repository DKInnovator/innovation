import classes from "./PurchaseSideBar.module.css";
import { FiShare2 } from "react-icons/fi";

const PurchaseSideBar = (props) => {
  const actualPrice = props.courseData.actualPrice;
  let netPrice = props.courseData.netPrice;

  const discountPercent = (
    ((actualPrice - netPrice) * 100) /
    actualPrice
  ).toFixed(1);

  if (netPrice < 100000) {
    netPrice = netPrice.toFixed(2);
  }

  return (
    <section className={classes["purchase-main"]}>
      {/* Course Image */}
      <div className={classes.image}>
        <img src={props.courseData.image}></img>
      </div>

      <div className={classes.price}>
        {/* Course price after discount */}
        <div className={classes["net-price"]}>Rs.{netPrice}</div>

        {/* //Course actual price */}
        <div className={classes["actual-price"]}>Rs.{actualPrice}</div>
      </div>
      <div className={classes["discount-per"]}> {discountPercent}%off</div>

      {/* Checkout button */}
      <div className={classes["enroll-btn"]}>
        <button>ENROLL NOW</button>
      </div>

      {/* Course realted extra info */}
      <div className={classes["extra-details"]}>
        <p>Duration</p>
        <p className={classes.value}>{props.courseData.duration}</p>
      </div>
      <div className={classes["extra-details"]}>
        <p>Enrolled</p>
        <p className={classes.value}>{props.courseData.enrolled}</p>
      </div>
      <div className={classes["extra-details"]}>
        <p>Language</p>
        <p className={classes.value}>{props.courseData.language}</p>
      </div>
      <div className={classes["extra-details"]}>
        <p>Skill</p>
        <p className={classes.value}>{props.courseData.skill}</p>
      </div>
      <div className={classes["extra-details"]}>
        <p>Certificate</p>{" "}
        <p className={classes.value}>{props.courseData.certificate}</p>
      </div>

      <div className={`${classes["extra-details"]} ${classes.share}`}>
        <FiShare2 style={{ marginRight: "0.4rem" }} /> Share this course
      </div>
    </section>
  );
};

export default PurchaseSideBar;
