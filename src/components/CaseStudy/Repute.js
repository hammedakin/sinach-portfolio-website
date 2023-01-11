import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import img1 from "../../assets/case-study/repute1.png";
import img2 from "../../assets/case-study/repute2.png";
import img3 from "../../assets/case-study/repute3.png";
import img4 from "../../assets/case-study/repute4.png";
import img5 from "../../assets/case-study/repute5.png";
import img6 from "../../assets/case-study/repute6.png";
import img7 from "../../assets/case-study/repute7.png";
import img8 from "../../assets/case-study/repute8.png";
import img9 from "../../assets/case-study/repute9.png";
import img10 from "../../assets/case-study/repute10.png";
import { StyledButton } from "../GlobalStyles.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Section, StyledRefarmB } from "./CaseStudy.styled";

const Repute = () => {
    return (
        <Container>
            <Navbar />
            <StyledRefarmB>
                <div className="my-5">
                    <h3 className="mb-5">Repute Case Study</h3>

                    <div className="my-3">
                        <h6>
                            My role :
                            <span className="fw-light">
                                {' '}    Product and Design Lead
                            </span>
                        </h6>
                        <h6>
                            Length :
                            <span className="fw-light">
                                {' '}    6 Weeks
                            </span>
                        </h6>
                        <h6>
                            Outcome :
                            <span className="fw-light">
                                {' '}    UX & UI Design, UI Components, Product Design
                            </span>
                        </h6>
                        <h6>
                            Tools :
                            <span className="fw-light">
                                {' '}    Figma, Notion, Miro, Trello
                            </span>
                        </h6>
                    </div>

                    <Section>
                        <h4>Overview</h4>
                        <p>
                            Imagine you have a restaurant, after a customer has visited and had an experience, they leave a horrible review and 1 star on your site.
                        </p>
                        <p>
                            However, you're unable to erase that review or clear your business's image before the public and that becomes a problem. Leaving that horrible review could disrupt your business's growth for a long time. You need that review gone!
                        </p>
                        <p>
                            And for that, we present you a solution with Repute, an app where businesses can lodge reports about bad reviews and our lawyers work towards taking them down by sending a letter to the reviewer, and it is fixed, at an affordable fee.
                        </p>
                        <p>
                            Businesses that want to manage their online reputation across their suite of products can sign up with us and periodically report reviews they want taken down, we take over from there.
                        </p>
                    </Section>

                    <Section>
                        <h4>My Role</h4>
                        <p>
                            Worked as one of the Product Managers in the team, collaborated with the other Product Managers in the team to deliver this product.
                        </p>

                    </Section>

                    <Section>
                        <h4>Understanding the user</h4>
                        <h5>Assumption Mapping</h5>
                        <p>
                            The idea to create this product is based on the following assumptions:
                            <ul>
                                <li>
                                    Users don't want bad reviews on their business websites or apps.
                                </li>
                                <li>
                                    Users only want great brand identity online.
                                </li>
                                <li>
                                    Users are willing to pay for good PR service.
                                </li>
                                <li>
                                    Users want to be able to track bad reviews about their business.
                                </li>
                                <li>
                                    Users don't want to face these customers themselves over the negative reviews.
                                </li>
                            </ul>
                        </p>
                        <h5>User Persona</h5>
                        <p>
                            I worked with the designers to extract insights about the user to help us give direction to the solution we are looking at delivering.
                        </p>

                        <img src={img1} alt="img" width="100%" />
                        <img src={img2} alt="img" width="100%" />
                        <img src={img3} alt="img" width="100%" />

                    </Section>

                    <Section>
                        <h4>Defining the Problem and Solution</h4>
                        <h5>
                            Problem
                        </h5>
                        <p>
                            The team took note of the rising trend: high profile individual and business are becoming more susceptible to negative review, where a few words could have a devastating impact on the reputation, sales, recruitment efforts of the victim. for this reason, the repute vision came to life.
                        </p>
                        <h5>
                            Solution
                        </h5>
                        <p>
                            For businesses that want to maintain a great public image, Repute is a reputation management app that helps users maintain good public relations instead of addressing it themselves and/or through other individuals.
                        </p>
                        <p>
                            This would be validated when businesses utilise Repute more than other existing alternatives.
                        </p>
                        <h5>
                            FEATURES TO BE DEVELOPED
                        </h5>

                        <h6>
                            <i className="font-weight-bold"> Businesses</i>
                        </h6>
                        <p>
                            <ul>
                                <li>
                                    User Login/Signup
                                </li>
                                <li>
                                    Review Input
                                </li>
                                <li>
                                    Process Status/Progress
                                </li>
                                <li>
                                    Filtered Section
                                </li>
                            </ul>
                        </p>
                        <h6>
                            <i className="font-weight-bold"> Lawyers</i>
                        </h6>
                        <p>
                            <ul>
                                <li>
                                    Filtered Section
                                </li>
                                <li>
                                    Show details of reviewer
                                </li>
                                <li>
                                    Updating Page of each case
                                </li>
                            </ul>
                        </p>
                        <h5>
                            Task Analysis
                        </h5>

                        <img src={img4} alt="img" width="100%" />

                        <p>
                            <ul>
                                <li>
                                    The users (businesses and lawyers) should be able to successfully create an account.
                                </li>
                                <li>
                                    The businesses should be able to log in reports of bad reviews to their dashboard.
                                </li>
                                <li>
                                    The lawyers should see the reports that are to be attended to and attend to them.
                                </li>
                                <li>
                                    The lawyers should see reviews that are yet to be resolved and pick the one(s) they want to handle.
                                </li>
                                <li>
                                    The lawyers should be able to fetch details of the review from their dashboard to know how to prepare the letter.
                                </li>
                            </ul>
                        </p>

                        <h5>
                            Design Style guides
                        </h5>
                        <p>
                            During the design process, we ensured that all product design components adhered to industry standards. This helped ensure that the product was consistent, professional, and of high quality.
                        </p>
                        <img src={img5} alt="img" width='100%' />
                    </Section>

                    <Section>
                        <h4>Delivering the Minimum Valuable Product</h4>
                        <p>
                            Technical Requirements:
                            <br />
                            <i>Selected Languages, Stack and Tools: </i> (FE, BE, Cloud, DB)
                        </p>
                        <h6>
                            <i> Frontend Stack</i>
                        </h6>
                        <p>
                            <ul>
                                <li>
                                    React.js
                                </li>
                                <li>
                                    Style-component
                                </li>
                                <li>
                                    Next.js
                                </li>
                            </ul>
                        </p>
                        <p>
                            <h6>
                                <i> Backend Stack</i>
                            </h6>
                            <ul>
                                <li>
                                    .NET 6.0
                                </li>
                                <li>
                                    Postman
                                </li>
                                <li>
                                    Azure Free tier
                                </li>
                                <li>
                                    Entity Framework Core
                                </li>
                            </ul>
                        </p>

                        <img src={img6} alt="img" width="100%" />
                        <img src={img7} alt="img" width="100%" />

                        <p>
                            Some of the products screens:
                        </p>

                        <img src={img8} alt="img" width="100%" />
                        <img src={img9} alt="img" width="100%" />
                        <img src={img10} alt="img" width="100%" />

                        <p>
                            The First Product Release can be found <a href="https://repute.legal/"> Here</a>.
                        </p>
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
                            study.if you have any questions about it, you can send me a <a href="https://twitter.com/sinachpatrick"> message</a>.
                        </p>
                    </Section>
                </div>

                <div className="d-flex justify-content-between">
                    <Link to="/works/1">
                        <StyledButton>
                            <FaArrowLeft /> Back
                        </StyledButton>
                    </Link>

                    <Link to="/works/3">
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

export default Repute;
