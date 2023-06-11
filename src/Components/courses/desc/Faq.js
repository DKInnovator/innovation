import DropDown from "./DropDown";

// Frequently asked questions
const Faq = (props) => {
  return (
    <>
      {props.data.map((value, index) => (
        <DropDown
          key={index}
          heading={value.question}
          keyFeatures={[value.answer]}
        />
      ))}
    </>
  );
};

export default Faq;
