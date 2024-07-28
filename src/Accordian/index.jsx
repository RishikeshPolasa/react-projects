import { useState } from "react";
import {
  AccordianWrapper,
  AccordianWrp,
  Heading,
  SubHeading,
  ArrowDowwardIcon,
  HeadingAndArrowWrp,
  AccordianHeading,
} from "./style.jsx";

function Accordian(props) {
  const [ind, setIndex] = useState(null);
  const data = props?.data;
  const defaultProps = [
    {
      name: "This is first accordian",
      answer:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit luctus platea lectus varius sollicitudin arcu. Penatibus lobortis etiam luctus potenti magnis quis consequat ultrices malesuada.",
    },
    {
      name: "This is second accordian",
      answer:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Id eget phasellus quisque, lectus nec penatibus netus malesuada. Ad nullam aptent efficitur, eget nullam nullam eget diam odio. At odio volutpat elementum nascetur nunc neque tellus. Arcu suscipit nec ullamcorper vestibulum gravida, augue eleifend felis. Libero rhoncus scelerisque tristique netus semper; lectus congue proin?",
    },
    {
      name: "This is third accordian",
      answer:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus integer amet cursus, neque mi gravida cursus. Vel proin viverra sollicitudin cras fusce scelerisque venenatis suscipit pulvinar.",
    },
  ];
  const arr = data || defaultProps;
  const hanldeAccordian = (e, index) => {
    e.preventDefault();

    setIndex(index === ind ? "null" : index);
  };
  return (
    <>
      <AccordianWrapper>
        <AccordianHeading>Accordian</AccordianHeading>
        {arr.map((acc, index) => {
          return (
            <AccordianWrp isActive={ind === index}>
              <HeadingAndArrowWrp onClick={(e) => hanldeAccordian(e, index)}>
                <Heading>{acc.name}</Heading>
                <ArrowDowwardIcon isActive={ind === index} />
              </HeadingAndArrowWrp>
              <SubHeading isActive={ind === index}>{acc.answer}</SubHeading>
            </AccordianWrp>
          );
        })}
      </AccordianWrapper>
    </>
  );
}

export default Accordian;
