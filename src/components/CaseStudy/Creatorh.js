import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Creatorh2 from "../../assets/case-study/creatorh2.png";
import Creatorh3 from "../../assets/case-study/creatorh3.png";
import Creatorh4 from "../../assets/case-study/creatorh4.png";
import Creatorh5 from "../../assets/case-study/creatorh5.png";
import Creatorh6 from "../../assets/case-study/creatorh6.png";
import Creatorh7 from "../../assets/case-study/creatorh7.png";
import Creatorh8 from "../../assets/case-study/creatorh8.png";
import Creatorh9 from "../../assets/case-study/creatorh9.png";
import Creatorh10 from "../../assets/case-study/creatorh10.png";
import Creatorh11 from "../../assets/case-study/creatorh11.png";
import Creatorh12 from "../../assets/case-study/creatorh12.png";
import { Link } from "react-router-dom";
import { StyledButton } from "../GlobalStyles.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Creatorh = () => {
  return (
    <Container>
      <Navbar />
      <StyledCreatorh>
        <h2>Creatorh Case Study</h2>

        <Images>
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674156479/Sinachpat/creatorh0_oaviib.png"
            alt=""
          />
        </Images>
        <div className="Intro">
          <div className="role">
            <h5>My role</h5>
            <p>Lead User Experience (UX) Designer</p>
            <p>Interaction Designer</p>
          </div>
          <div className="length">
            <h5>Length</h5>
            <p>4 Weeks</p>
          </div>
          <div className="outcome">
            <h5>Outcome</h5>
            <p>UX & UI Design</p>
            <p>UI Components</p>
            <p>Product Design</p>
          </div>
          <div className="tools">
            <h5>Tools</h5>
            <p>Figma</p>
            <p>Notion</p>
            <p>Miro</p>
            <p>Trello</p>
          </div>
        </div>

        <h3>Challenge</h3>
        <h4>⚡ Social Network for the Next Billon Creators</h4>
        <p>
          African entrepreneurs face many challenges in their efforts to create
          solutions that benefit society. One of the biggest challenges they
          face is lack of access to capital. Many African entrepreneurs have
          great ideas, but they lack the financial resources to turn their ideas
          into reality. This can be due to a lack of investment opportunities in
          their local communities, or it can be due to a lack of access to
          credit or loans from banks or other financial institutions.
        </p>
        <p>
          Another challenge that African entrepreneurs face is inconsistent
          government policies. Governments in Africa often change policies or
          regulations without warning, making it difficult for entrepreneurs to
          plan for the future. This can make it difficult for entrepreneurs to
          grow their businesses and create stable, long-term solutions. African
          entrepreneurs may also struggle with a lack of knowledge on how to run
          a business. Many entrepreneurs in Africa are self-taught, and they may
          not have access to the same resources or training that entrepreneurs
          in other parts of the world do. This can make it difficult for them to
          navigate the business world and create sustainable solutions.
        </p>
        <p>
          Marketing can also be a challenge for African entrepreneurs. Many
          entrepreneurs in Africa face barriers to reaching customers, such as a
          lack of internet access or limited access to traditional marketing
          channels. This can make it difficult for them to promote their
          products or services and grow their customer base. Additionally,
          African entrepreneurs may struggle to find experienced mentors or
          partners to help them grow their businesses. Many entrepreneurs in
          Africa are on their own, and they may not have access to the same
          networks or support systems that entrepreneurs in other parts of the
          world do. This can make it difficult for them to learn from others and
          get the guidance they need to succeed. All these were the reasons why
          we built Creatorh.
        </p>

        <h3>The Solution</h3>
        <p>
          <b>Creatorh</b> is a social network designed to help African
          entrepreneurs overcome these challenges. The platform provides a space
          for African entrepreneurs to connect with each other, share their
          experiences, and learn from one another. It also offers resources and
          support to help entrepreneurs grow their businesses and create
          solutions that benefit their communities. Any person, not just African
          entrepreneurs, can sign up for the app and join the community.
        </p>
        <h4>This App will enable the Entrepreneur to:</h4>
        <ol>
          <li>
            Connect with other entrepreneurs and creators from continental scope
            down to their communities.
          </li>
          <li>
            Get access to funding from investors or through founding partners
            model.
          </li>
          <li>
            Learn from the stories and experiences of other entrepreneurs
            through hosted audio sessions.
          </li>
          <li>
            Get access to a marketplace for equipment and working tools at cheap
            rates with an installment payment option.
          </li>
          <li>
            Recruit part-time, remote, and contract employees with varying
            compensation plans.
          </li>
          <li>Get updates on Industry news, policies and events.</li>
        </ol>

        <h3>Market Research</h3>
        <p>
          The first step we took after discussing with the founder was to
          conduct a detailed market research. The goal of this exercise was to
          understand the current platforms that exists and the current solution
          models.
        </p>
        <p>
          The Social network space has been one that dominated over the years by
          the big guys and the top and have created some user experience models
          over the years so we took the step to understanding these solutions.
          The current major players within the space were - LinkedIn and
          Polywork.
        </p>
        <p>
          <b>LinkedIn</b> - LinkedIn is a social networking platform designed
          specifically for the professional world. It allows users to create a
          profile, connect with other professionals, and share information about
          their work experience, skills, and education. LinkedIn can help users
          find job opportunities, get introduced to potential clients or
          partners, and stay in touch with colleagues and classmates.
        </p>
        <p>
          <b>Polywork</b> - Polywork is a collaboration network that connects
          people and helps them work together on projects. It allows users to
          create and join teams, share files and documents, communicate with
          each other, and manage their work. With Polywork, users can access all
          of their project resources in one place, making it easier to keep
          track of what needs to be done and collaborate with their team
          members.
        </p>
        <p>
          We worked with this details from the research to understand how this
          solution can be built for Africans.
        </p>
        <Images>
          <img src={Creatorh2} alt="" />
        </Images>

        <h3>User Journey Map</h3>
        <p>
          During this stage, we tried to understand the phases of journey the
          different users will take in their entry to the Creatorh platform and
          the different channels the user takes. The job seeker, the
          entrepreneur looking to hire talents, raise funds, or carry out a BNPL
          trading in order to procure some facilities, the vendor looking to
          sell their product.{" "}
        </p>
        <p>
          The product ux was meant to make the use of these different features
          seamless.
        </p>
        <Images>
          <img src={Creatorh3} alt="" />
          <img src={Creatorh4} alt="" />
          <img src={Creatorh5} alt="" />
        </Images>

        <h3>User Persona</h3>
        <p>
          The user persona is a fictional character that represents a typical
          user of the Creatorh platform. By creating a user persona, the team
          can better understand the needs, goals, and motivations of their
          users, and design the product with those insights in mind.{" "}
        </p>
        <p>
          In this case, the team focused on the different types of users who
          might use the Creatorh platform, such as job seekers, entrepreneurs,
          and vendors. By understanding the different phases of the user
          journey, the team can design a user experience that is seamless and
          intuitive for all users. This can help ensure that the product is
          effective and easy to use for everyone who uses it.
        </p>
        <Images>
          <img src={Creatorh6} alt="" />
          <img src={Creatorh7} alt="" />
          <img src={Creatorh8} alt="" />
        </Images>

        <h3>Who are our stakeholders</h3>
        <p>
          In a project or business, stakeholders are individuals or groups who
          have a vested interest in the success of the project or business. They
          may have a financial interest, or they may have an interest in the
          outcome of the project for other reasons. In the context of a
          platform, the stakeholders may include the users of the platform, as
          well as any investors or other individuals or organisations who have a
          financial interest in the success of the platform. It is important for
          the project team to consider the needs and concerns of all
          stakeholders when making decisions about the design and development of
          the platform.
        </p>
        <ul>
          <li>Entrepreneurs</li>
          <li>Vendors</li>
          <li>Investors</li>
          <li>Skilled Professionals</li>
        </ul>
        <p>
          Every design solution we delivered was done with respect to this
          stakeholders. In general, it is important to consider stakeholders in
          the design process because they are the individuals or groups who will
          be impacted by the design solution. This could include customers,
          users, employees, shareholders, and other groups who have a vested
          interest in the success of the project. By considering the needs and
          perspectives of these stakeholders, designers can create solutions
          that are more effective, efficient, and align with the goals and
          values of the stakeholders.
        </p>

        <h3>Design Elements - Style guide</h3>
        <p>
          We worked within the constraints of a style guide making us deliver
          consistent design patterns across pages.
        </p>
        <p>
          A style guide is a set of standards for the writing and design of
          documents, including the layout, formatting, and visual design
          elements. It provides a common set of guidelines to ensure that all
          materials within a given project, such as a website or application,
          have a consistent look and feel. This can help to improve the user
          experience and make the materials easier to read and navigate.
        </p>
        <Images>
          <img src={Creatorh9} alt="" />
        </Images>

        <h3>Design Flow Presentation - and explanations</h3>
        <Images>
          <img src={Creatorh10} alt="" />
          <img src={Creatorh11} alt="" />
          <img src={Creatorh12} alt="" />
        </Images>

        <h3>Takeaways</h3>
        <ul>
          <li>
            The Entrepreneurs in Africa have some limitations in access to some
            key connections and access to resources that would enable them
            succeed. This shows the importance of this project.
          </li>
          <li>
            The focus group of a product can be dynamic and this would require
            flexibility in the design of this product and future iterations.
          </li>
        </ul>

        <div className="d-flex justify-content-between">
          <Link to="/works/5">
            <StyledButton>
              <FaArrowLeft /> Back
            </StyledButton>
          </Link>

          <Link to="/works/7">
            <StyledButton>
              Next <FaArrowRight />
            </StyledButton>
          </Link>
        </div>
      </StyledCreatorh>
      <Footer />
    </Container>
  );
};

export default Creatorh;

const StyledCreatorh = styled.main`
  margin-top: 151px;
  min-height: 100vh;
  .Intro {
    width: 100%;
    display: grid;
    grid-template-columns: 30% 20% 20% 20%;
    gap: 60px;
    div {
      display: flex;
      flex-direction: column;
      gap: 0px;
      margin-bottom: 20px;
      p {
        margin-bottom: 3px;
      }
    }
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    background: linear-gradient(180deg, #ffffff 0%, #408cff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    @media (max-width: 1024px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 38px;
    line-height: 48px;
    color: #ffffff;
    margin-top: 30px;

    @media (max-width: 1024px) {
      font-size: 32px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  h4 {
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    color: #ffffff;
    margin-top: 20px;

    @media (max-width: 1024px) {
      font-size: 22px;
    }
    @media (max-width: 768px) {
      font-size: 17px;
      line-height: 24px;
    }
    @media (max-width: 480px) {
      font-size: 17px;
      line-height: 24px;
    }
  }
  h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #c4c4c4;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 24px;
    }
  }
  p,
  ul li,
  ol li {
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    color: #c4c4c4;

    @media (max-width: 480px) {
      font-size: 11px;
      margin-bottom: 24px;
    }
  }
  @media (max-width: 480px) {
    margin-top: 66px;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
