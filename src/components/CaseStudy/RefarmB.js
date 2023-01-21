import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Section, StyledCaseStudy } from "./CaseStudy.styled";
import CSButtons from "./CSButtons";

const RefarmB = () => {
  return (
    <Container>
      <Navbar />
      <StyledCaseStudy>
        <div className="my-5">
          <h3 className="mb-5">Refarm for Businesses Case Study</h3>
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674136177/Sinachpat/RefarmB0_ggnquc.jpg"
            alt="cover"
            width="100%"
          />
          <Section>
            <h4>Overview</h4>
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
            <h4>Challenge</h4>
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
            <h4>The Solution Summary</h4>
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
            <h4>Market Research</h4>
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
            <h4>User Persona</h4>
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

            <img
              src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122603/Sinachpat/RefarmB1_tmw0ca.png"
              alt="img"
              width="100%"
            />

            <p>
              The second user is Mrs. Dorcas, <br />
              Dorcas is the owner of a fast-food restaurant called Ify's
              Kitchen. She is based in Uyo, Akwa-ibom State and is known for
              creating special recipes using fresh, natural agricultural
              products. She learned about Refarm through a Facebook ad and likes
              that she can interact with farmers directly to get the freshest
              products for her restaurant.
            </p>

            <img
              src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122569/Sinachpat/RefarmB2_ddpc7y.png"
              alt="img"
              width="100%"
            />
          </Section>

          <Section>
            <h4>Who are our stakeholders</h4>
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
            <h4>Ideations and Solution Statements</h4>
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
            <h4>Information Architecture</h4>
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

            <img
              src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122560/Sinachpat/RefarmB3_cg37rs.png"
              alt="img"
              width="100%"
            />
          </Section>

          <Section>
            <h4>Design Elements - Style guide</h4>
            <p>
              Below we the style guide used in designing the Refarm Business
              App. This style guide includes colour, typography, brand logo,
              etc.
            </p>

            <img
              src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122568/Sinachpat/RefarmB4_rmjxxs.png"
              alt="img"
              width="100%"
            />
          </Section>

          <Section>
            <h4>Design Flow Presentation - and explanations</h4>

            <img
              src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122578/Sinachpat/RefarmB5_gb7t8m.png"
              alt="img"
              width="100%"
            />

            <img
              src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122575/Sinachpat/RefarmB6_tbsbza.png"
              alt="img"
              width="100%"
            />
          </Section>

          <Section>
            <h4>Learnings and Way forward</h4>
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
            <h4>Thanks for reading</h4>
            <p>
              Thank you for taking out your time to read through this case
              study. Do let me know if you have any feedback or contact me{" "}
              <a href="https://www.linkedin.com/in/wisdomezeogu"> here</a>.
            </p>
          </Section>
        </div>

        <CSButtons prev={""} next={"2"} />
      </StyledCaseStudy>
      <Footer />
    </Container>
  );
};

export default RefarmB;
