import { Container } from "./Desgn.styled";

const Design = () => {
  return (
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
  );
};

export default Design;
