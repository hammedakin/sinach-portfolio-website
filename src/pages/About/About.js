import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "../Home/Home.styled";
import { AboutHeader, StyledAbout } from "./About.styled";
import ThoughtShared from "./ThoughtShared";

const About = () => {
    return (
        <Container>
            <StyledAbout>
                <Navbar />
                <AboutHeader>
                    <div className="text-center">
                        <h6>
                            Okay, I am
                        </h6>
                        <h1>
                            Osinachi Patrick
                        </h1>
                    </div>
                </AboutHeader>
                <hr />
                <div className="about-body">
                    <p className="">
                        I'm Osinachi Patrick, a highly experienced product person with a wealth of experience working on a variety of products in different industries. I am passionate about building and enhancing great user experiences and design systems. I approach my work by first systematically understanding the problem from the perspective of users and the business. <br />
                        In addition to my experience in product design, I also have a solid familiarity with engineering and technical product management. I bring professional training and experience working with some highly skilled teams across Fintech, EdTech, Blockchain, RealTech, and SaaS.
                        My skillsets include:
                    </p>
                    <li>
                        Strategy & System: User Experience Research, Competitive Analysis, Human Centered Design, UX Strategy, Product Thinking, Product Lifecycle management
                    </li>
                    <li>
                        Craft & Execution Methods: Product requirements definition, Functional Requirements analysis, UX Design, Information Architecture, UX Writing/Content Design, Interaction Design, UX Auditing, Product Planning, Product Roadmapping
                    </li>
                    <p>
                        I work with a team of professionals to execute any product idea, with the goal of the project determining which skills are deployed. I have used all of these skills in the various product roles I have held in industries such as Fintech, Realtech, and Blockchain. These are my areas of expertise, my sweet spots, if you will.  <br />
                        Throughout my career, I have mostly worked with startups and teams in growth phase businesses, taking on a range of roles from creative design and UX design to product management. <br />
                        When working on a project, I like to first set the context and determine the direction, whether working alone or with a team. Typically, you can find me managing a product team, designing a product or service, or serving as a liaison between the design and engineering teams. <br />
                        In my free time, I enjoy listening to music, surfing the internet, and reading about product development (design/frontend engineering).
                    </p>
                </div>
                <hr />
                <ThoughtShared />
                <Footer />
            </StyledAbout>
        </Container>
    );
};

export default About;