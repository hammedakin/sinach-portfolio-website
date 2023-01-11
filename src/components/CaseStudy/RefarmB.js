import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import img1 from "../../assets/case-study/RefarmB1.png";
import img2 from "../../assets/case-study/RefarmB2.png";
import img3 from "../../assets/case-study/RefarmB3.png";
import img4 from "../../assets/case-study/RefarmB4.png";
import img5 from "../../assets/case-study/RefarmB5.png";
import img6 from "../../assets/case-study/RefarmB6.png";
import { StyledButton } from "../GlobalStyles.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RefarmB = () => {
  return (
    <Container>
      <Navbar />
      <StyledRefarmB>
        <div className="my-5">
          <h4 className="mb-5">Refarm for Businesses Case Study</h4>

          <Section>
            <h5>Overview</h5>
            <p>
              To become Africa's foremost fresh food produce supply chain by
              building an ecosystem of products that connects farmers, field
              agents, businesses, and consumers in a seamless flow of farm
              produce from farm to fork.
            </p>
            <p>
              The company has already developed two base user interactive
              products: a Farmer's App and a Field Agents App. They are now
              working on the Business App for Food/Farm Product Merchants and
              Manufacturers, called the Refarm app. This app is designed for
              both free and premium users and aims to connect merchants and
              manufacturers with fresh farm produce, provide a marketplace for
              them to buy and sell produce, and allow them to monitor their use
              of the farm produce.
            </p>
          </Section>

          <Section>
            <h5>Challenge</h5>
            <p>
              While working on the product design, some challenges were
              encountered along the line.
              <ul>
                <li>Not having full grasp of the product's aim initially.</li>
                <li>
                  Being a new and novel solution, we had to build the design
                  system and documentation from scratch with no reference.
                </li>
                <li>
                  We didn't have the opportunity to carry the developers along
                  while designing so as to have a seamless handover process at
                  the end.
                </li>
              </ul>
            </p>
            <p>
              The company has already developed two base user interactive
              products: a Farmer's App and a Field Agents App. They are now
              working on the Business App for Food/Farm Product Merchants and
              Manufacturers, called the Refarm app. This app is designed for
              both free and premium users and aims to connect merchants and
              manufacturers with fresh farm produce, provide a marketplace for
              them to buy and sell produce, and allow them to monitor their use
              of the farm produce.
            </p>
          </Section>

          <Section>
            <h5>The Solution Summary</h5>
            <p>
              The Solution Refarm Business aims to provide is as already stated
              by the Product's slogan - from farm to fork.
            </p>
            <p>
              The product aims to provide a platform that connects farmers,
              field agents, merchants and businesses in a seamless process so as
              to save time, money and effort.
            </p>
          </Section>

          <Section>
            <h5>Market Research</h5>
            <p>
              Of course, the aim of any product is to solve real user problems.
              And we can't truly solve user problems until we find out what
              their problems are. We carried out some market research before and
              after speaking with the company's stakeholders. Our findings were
              very insightful and they are presented below:
              <ul>
                <li>
                  We found out that many of the farmers didn't have an organised
                  system for marketing their farm produce after harvesting.
                </li>
                <li>
                  Again, we discovered that businesses needed a solution for
                  fresh food to be delivered to them in the shortest time
                  possible without them committing much of their productive time
                  sourcing for that.
                </li>
                <li>
                  Many merchants, on the other hand, needed a way to cater for
                  their transportation limitations which is where our Field
                  Agents Solution play a vital role.
                </li>
              </ul>
            </p>
          </Section>

          <Section>
            <h5>User Persona</h5>
            <p>
              I did research to understand the needs of the business we want to
              help, and I am using that information to create a solution for
              their challenges.
              <br />
              The first ideal user we have which is a Food products merchant was
              represented as Mr. Kenneth,
            </p>
            <p>
              Kenneth is a business owner who buys and sells agricultural
              products like grains, beans, and animals. He is based in one state
              but also runs a business in another state with the help of a
              manager. He is interested in using technology to grow his business
              and has been using a system called Refarm to automate parts of his
              operations.
            </p>

            <img src={img1} alt="img" width="100%" />

            <p>
              The second user is Mrs. Dorcas, <br />
              Dorcas is the owner of a fast-food restaurant called Ify's
              Kitchen. She is based in Uyo, Akwa-ibom State and is known for
              creating special recipes using fresh, natural agricultural
              products. She learned about Refarm through a Facebook ad and likes
              that she can interact with farmers directly to get the freshest
              products for her restaurant.
            </p>

            <img src={img2} alt="img" width="100%" />
          </Section>

          <Section>
            <h5>Who are our stakeholders</h5>
            <p>
              The key stakeholders in the flow of operations of the app
              includes:
              <ul>
                <li>Fresh Food/Farm produce merchant businesses</li>
                <li>Food Manufacturing businesses/companies</li>
              </ul>
            </p>
          </Section>

          <Section>
            <h5>Ideations and Solution Statements</h5>
            <p>
              The features afforded to the businesses by the Refarm Business App
              are:{" "}
              <ul>
                <li>
                  The businesses will be able to order farm produce directly
                  from farmers listings in the business marketplace. This farm
                  produce can either be readily available or in growth stage
                  this would mean that businesses should be able to: pre-order
                  farm produce.
                </li>
                <li>
                  Businesses should be able to order any farm produce, have the
                  field agents pick it up from farmers and deliver it to the
                  businesses.
                </li>
                <li>
                  Businesses should see a section that shows the produce they
                  have in stock, quantity remaining, a recommended need in the
                  business’s stock of farm produce or food products.
                </li>
                <li>
                  Businesses should also be able to see the details of inflow
                  and outflow of the products they have in stock, this should be
                  shown in their dashboard & analytics. This includes quantity
                  bought, quantity either sold or used for manufacturing foods
                  by the factory. This is more like an inventory system within
                  the business app.
                </li>
                <li>
                  Businesses should also be able to see where the products
                  outflow goes to - either sold or used for manufacturing (name
                  of the person that bought or name of the particular factory
                  and department that used the produce).
                </li>
                <li>
                  Again, the businesses should be able to send out inflow and
                  outflow statements within the app and also a comprehensive
                  report in-app.
                </li>
                <li>
                  Furthermore, the business should have a wallet that they can
                  send in and receive withdraw funds from. They will make
                  payments also from this wallet.
                </li>
              </ul>
            </p>
          </Section>

          <Section>
            <h5>Information Architecture</h5>
            <p>
              To begin with, what is information architecture? Information
              Architecture (IA) is the art and science of organizing and
              labeling the content of websites, mobile applications, and other
              digital media software to help support usability and findability.
              Or, in simple terms, IA is the art of organizing information on
              digital media platforms in order to aid understanding of the
              structure of the platform.
            </p>
            <p>
              The Information Architecture for the Refarm Business App is
              represented in the illustration below:
            </p>

            <img src={img3} alt="img" width="100%" />
          </Section>

          <Section>
            <h5>Design Elements - Style guide</h5>
            <p>
              Below we the style guide used in designing the Refarm Business
              App. This style guide includes colour, typography, brand logo,
              etc.
            </p>

            <img src={img4} alt="img" width="100%" />
          </Section>

          <Section>
            <h5>Design Flow Presentation - and explanations</h5>

            <img src={img5} alt="img" width="100%" />

            <img src={img6} alt="img" width="100%" />
          </Section>

          <Section>
            <h5>Learnings and Way forward</h5>
            <p>
              <ul>
                <li>
                  Working on this product, I’ve learnt that in proffering a
                  solution for a user problem, the interest of the user must be
                  considered at every design stage so as to come up with a
                  usable and functional product for the intended user.
                </li>
                <li>
                  Way forward, we will go on with the user testing on our target
                  audience to ascertain if our solution addresses the real user
                  issues.
                </li>
              </ul>
            </p>
          </Section>

          <Section>
            <h5>Thanks for reading</h5>
            <p>
              Thank you for taking out your time to read through this case
              study. Do let me know if you have any feedback or contact me here.
            </p>
          </Section>
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/works">
            <StyledButton>
              <FaArrowLeft /> Back
            </StyledButton>
          </Link>

          <Link to="/works/2">
            <StyledButton>
              <FaArrowRight /> Next
            </StyledButton>
          </Link>
        </div>
      </StyledRefarmB>
      <Footer />
    </Container>
  );
};

export default RefarmB;

const StyledRefarmB = styled.main`
  h4 {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* margin-bottom: 2rem; */

    background: linear-gradient(180deg, #ffffff 0%, #408cff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Section = styled.section`
  /* margin-bottom: 3rem; */

  h5 {
    font-size: 30px;
    /* margin-bottom: 1rem; */
    color: #ffffff;
  }

  p {
    font-size: 15px;
    margin-bottom: 0.5rem;
  }
`;
