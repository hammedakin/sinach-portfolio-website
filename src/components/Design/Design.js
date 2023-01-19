import { Container, MobileDesign } from "./Desgn.styled";
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

const Design = () => {
  const refList = useRef();
  const refList2 = useRef();
  const refList3 = useRef();
  const showList = () => {
    refList2.current.classList.remove("show");
    refList3.current.classList.remove("show");
    refList.current.classList.toggle("show");
    // console.log(refOne.current);
  };

  const showList2 = () => {
    refList.current.classList.remove("show");
    refList3.current.classList.remove("show");
    refList2.current.classList.toggle("show");
    // console.log(refOne.current);
  };

  const showList3 = () => {
    refList2.current.classList.remove("show");
    refList.current.classList.remove("show");
    refList3.current.classList.toggle("show");
    // console.log(refOne.current);
  };

  return (
    <>
      <Container>
        <div className="blue">
          <h3>Strategy & Systems</h3>
          <li>User Experience Research</li>
          <li>Competitive Analysis & Analysis Matrix Design</li>
          <li>Human Centered Design</li>
          <li>User Experience Strategy</li>
          <li>Product Thinking</li>
          <li>Product Lifecycle Management</li>
          <li>Product Planning</li>
        </div>
        <div className="green">
          <h3>People & Teams</h3>
          <li>Communication & Documentation</li>
          <li>Empathy</li>
          <li>Conflict resolution systems</li>
          <li>Chaos Fixing</li>
        </div>
        <div className="purple">
          <h3> Craft & Magico</h3>
          <li>Product requirements definition</li>
          <li>Functional Requirements analysis</li>
          <li>User Experience Design</li>
          <li>Information Architecture</li>
          <li>Product Roadmapping</li>
          <li>Interaction Design</li>
          <li>UX Writing/Content Design</li>
        </div>
      </Container>
      <MobileDesign>
        <div className="blue mobile" onClick={showList}>
          <div>
            <h3>
              Strategy & Systems <FaAngleRight />{" "}
            </h3>
          </div>

          <ul ref={refList}>
            <li>User Experience Research</li>
            <li>Competitive Analysis & Analysis Matrix Design</li>
            <li>Human Centered Design</li>
            <li>User Experience Strategy</li>
            <li>Product Thinking</li>
            <li>Product Lifecycle Management</li>
            <li>Product Planning</li>
          </ul>
        </div>
        <div className="green mobile" onClick={showList2}>
          <div>
            <h3>
              People & Teams <FaAngleRight />
            </h3>
          </div>
          <ul ref={refList2}>
            <li>Communication & Documentation</li>
            <li>Empathy</li>
            <li>Conflict resolution systems</li>
            <li>Chaos Fixing</li>
          </ul>
        </div>
        <div className="purple mobile" onClick={showList3}>
          <div>
            <h3>
              Craft & Magico <FaAngleRight />
            </h3>
          </div>
          <ul ref={refList3}>
            <li>Product requirements definition</li>
            <li>Functional Requirements analysis</li>
            <li>User Experience Design</li>
            <li>Information Architecture</li>
            <li>Product Roadmapping</li>
            <li>Interaction Design</li>
            <li>UX Writing/Content Design</li>
          </ul>
        </div>
      </MobileDesign>
    </>
  );
};

export default Design;
