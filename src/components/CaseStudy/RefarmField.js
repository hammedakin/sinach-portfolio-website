import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import img1 from "../../assets/case-study/RefarmF1.png";
import img2 from "../../assets/case-study/RefarmF2.png";
import img3 from "../../assets/case-study/RefarmF3.png";
import img4 from "../../assets/case-study/RefarmF4.png";
import img5 from "../../assets/case-study/RefarmF5.png";
import img6 from "../../assets/case-study/RefarmF6.png";
import img7 from "../../assets/case-study/RefarmF7.png";
import img8 from "../../assets/case-study/RefarmF8.png";
import img9 from "../../assets/case-study/sonr9.png";
import img10 from "../../assets/case-study/sonr10.png";
import img11 from "../../assets/case-study/sonr11.png";
import img12 from "../../assets/case-study/sonr12.png";
import img13 from "../../assets/case-study/sonr13.png";
import img14 from "../../assets/case-study/sonr14.png";
import img15 from "../../assets/case-study/sonr15.png";
import img16 from "../../assets/case-study/sonr16.png";
import { StyledButton } from "../GlobalStyles.styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Section, StyledCaseStudy, } from "./CaseStudy.styled";

const RefarmField = () => {
    return (
        <Container>
            <Navbar />
            <StyledCaseStudy>
                <div className="my-5">
                    <h3 className="mb-5">Refarm for Field Agents</h3>

                    <div className="my-3 row">
                        <div className="col-md-3 col-6 mt-4">
                            <h6>
                                My role :
                            </h6>
                            <p className="fw-light">
                                Lead User Experience (UX) Designer, Interaction Designer, UX Researcher
                            </p>
                        </div>
                        <div className="col-md-3 col-6 mt-4">
                            <h6>
                                Length :
                            </h6>
                            <p className="fw-light">
                                4 Weeks
                            </p>

                        </div>
                        <div className="col-md-3 col-6 mt-4">
                            <h6>
                                Outcome :
                            </h6>

                            <p className="fw-light">
                                UX & UI Design<br /> UI Components<br /> Product Design
                            </p>
                        </div>
                        <div className="col-md-3 col-6 mt-4">
                            <h6>
                                Tools :
                            </h6>
                            <p className="fw-light">
                                Figma<br /> Notion<br /> Miro<br /> Trello
                            </p>

                        </div>

                    </div>

                    <Section>
                        <h4>Overview</h4>
                        <img src={img1} alt="img" width="100%" />
                        <p>
                            The Refarm app for Field Agents is an application designed to facilitate communication and interaction between field agents and farmers. Field agents are individuals who work on behalf of Refarm and are responsible for a variety of tasks related to the collection and distribution of farm produce. These tasks may include onboarding new farmers, collecting produce from farms, delivering farm inputs to farmers, and providing training to farmers on best practices and techniques. The app provides features that help field agents to efficiently and effectively perform these duties, ensuring a smooth and seamless flow of fresh farm produce from farmers to Refarm. Both free and premium users (field agents) can use the app.
                        </p>


                    </Section>

                    <Section>
                        <h4>Challenge</h4>
                        <p>
                            Since the field agents in the farm produce supply chain spend a large portion of their time on the road, working to maintain excellence in the logistics of the supply chain. In an effort to understand the factors that contribute to the success of these field agents and determine the most effective way to measure efficiency in the supply chain according to the product owners, I conducted interviews with stakeholders and identified key areas for optimising the app to increase efficiency.
                        </p>


                        <img src={img2} alt="img" width="100%" />


                    </Section>

                    <Section>
                        <h4>The Solution Summary</h4>
                        <p>
                            The product would be basically designed out to provide a comprehensive and efficient platform for field agents to manage their tasks related to interacting with and onboarding farmers, as well as delivering and obtaining farm inputs. Specifically, the app enables field agents to view farmers near them, confirm pickups and prices for produce, accept training schedules, log in with their official staff email, onboard farmers by collecting and verifying their details, view and confirm orders for farm inputs, view their activity history and print it out, and explore farmer’s listings that are ready for pick and requests for farm inputs on behalf of the farmers in their area.
                        </p>
                        <p>
                            This in summary is a simplified monitoring system for the field agents activities and interactions with the farmers.
                        </p>




                    </Section>

                    <Section>
                        <h4>Market Research</h4>

                        <p>
                            The purpose of this market research is to understand the needs and preferences of field agents who work with farmers in the agricultural sector. Through a combination of surveys, interviews, and focus groups, I aim to gather insights on the tasks and challenges that field agents face, as well as their expectations and preferences when it comes to technology solutions that can help them to complete their tasks more efficiently and effectively.
                        </p>
                        <p>
                            Based on the results of this market research, I will design an app that meets the needs and preferences of field agents, including features that allow them to view farmers near them, confirm pickups and prices for produce, accept training schedules, onboard farmers, view and confirm orders for farm inputs, view their activity history and print it out, and explore listings and requests for farm inputs. By addressing the specific needs and preferences of field agents, I aim to create a valuable and user-friendly app that will be widely adopted and used and integrate so well with the Refarm system.
                        </p>

                    </Section>

                    <Section>
                        <h4>User Persona</h4>

                        <p>
                            During the process of my research, I worked with the product owners to understand the individual characteristics of the field agents by conducting a micro-interview on the field agents through the product owners, this is a summary of my finding about the ideal field agent:
                        </p>
                        <p>
                            Duke is an active logistics agent who is known for his integrity and is looking to expand his services to new sectors, specifically the agriculture supply chain. He has joined a logistics company that works with Refarm and will be onboarded as a field agent in the Refarm supply chain system to help facilitate communication and transactions between farmers and Refarm. Duke values maximum productivity and is located in Bauchi state.
                        </p>
                        <img src={img4} alt="img" width="100%" />

                    </Section>

                    <Section>
                        <h4>Who are our stakeholders</h4>
                        <p>
                            The key stakeholders in the flow of operations of the Field agents app includes:
                        </p>
                        <ul>
                            <li>
                                The Refarm Admin
                            </li>
                            <li>
                                Farmers
                            </li>
                            <li>
                                The logistics company admin
                            </li>
                        </ul>
                    </Section>

                    <Section>
                        <h4>Ideations and Solution Statements</h4>
                        <p>
                            After interactions with the different stakeholders from the insight gotten about the operations and organizational goals, I was able to outline a detailed components of the MVP design for the Refarm for Field agents app. These are the tasks and the functionalities afforded the farmers in the app.
                        </p>
                        <ul>
                            <li>
                                View farmers near them: This feature allows field agents to see a list or map of farmers in their area who have signed up with the app. This can help them to identify farmers who they can work with and visit.
                            </li>
                            <li>
                                Confirm pickup and price of farm produce: Field agents can use this feature to indicate that they are coming to pick up farm produce from a farmer, and to agree on the listing price for the produce. They can also confirm that they have successfully picked up a particular produce from the farmer. This helps to ensure that field agents and farmers are clear about the terms of the transaction and the status of the produce.
                            </li>
                            <li>
                                Accept training schedules: The app allows the admin to set training schedules for field agents to visit and train farmers or provide them with advice. Field agents can use this feature to view the schedules and accept them as needed.
                            </li>
                            <li>
                                Onboard farmers: Field agents can use this feature to collect and verify the details of farmers who are signing up with the app. This includes collecting pictures, motorability of the road, and land topography. The app will verify the details provided by the farmers and send a verification email once they have been verified. If the details are not sufficient, the app will prompt the farmers to verify their account.
                            </li>
                            <li>
                                View and confirm orders for farm inputs: Field agents can use this feature to view orders for farm inputs that have been placed by farmers. They can confirm the orders that they will be delivering and arrange for delivery to the farmers.
                            </li>
                            <li>
                                View activity history and print it out: Field agents can use this feature to view their activity history within the app, including their interactions with farmers, deliveries, and other tasks. They can also print out their activity history if needed.
                            </li>
                            <li>
                                Explore farm input listings and requests: Field agents can use this feature to view listings of farm inputs that are available in their area, as well as requests for specific inputs made by farmers. This can help them to identify opportunities to deliver inputs to farmers or to find inputs that they need for their own tasks.
                            </li>
                        </ul>
                    </Section>

                    <Section>
                        <h4>Information Architecture</h4>

                        <img src={img4} alt="img" width="100%" />
                   
                    </Section>
                    
                    <Section>
                        <h4>Design Elements - Style guide</h4>
                        <p>
                            To ensure consistency in the other group of apps they system have, I sticked with the style guide of the product team:
                        </p>

                        <img src={img5} alt="img" width="100%" />
                      
                     
                    </Section>

                    <Section>
                        <h4>Interface Designs</h4>
                                        <img src={img5} alt="img" width="100%" />
                        <img src={img6} alt="img" width="100%" />
                        <img src={img7} alt="img" width="100%" />
                     
                    </Section>

                    <Section>
                        <h4>Learnings and Way forward</h4>
                        <p>
Here are some learnings that I gained from implementing these features in the, as well as some potential ways to improve the app based on those learnings:
                        </p>
                        <ul>
                            <li>
                                Understanding user needs and preferences: As the testing of the app is done and we gather feedback from field agents, we may learn more about their needs and preferences when it comes to interacting with farmers and completing tasks. This information can help us to improve the app's features and user experience to better meet their needs.
                            </li>
                            <li>
                                Identifying pain points and bottlenecks: By using the app and collecting data on how field agents are using it, we may identify areas where the app is not meeting their needs or where there are bottlenecks in their workflow. This information can help the team to identify and address any issues that are causing frustration or inefficiency for field agents.
                            </li>
                            <li>
Evaluating the effectiveness of features: By collecting data on how field agents are using the app and the outcomes of their tasks, we can evaluate the effectiveness of different features and see which ones are most useful to them. This can help us to prioritize and improve upon the features that are most valuable to field agents.
                            </li>
                            <li>
Incorporating new technologies and approaches: As we continue to develop and use the app, we may come across new technologies or approaches that could improve the app's functionality or user experience. By staying up to date on developments in the field, we may be able to incorporate these innovations into the app to keep it relevant and effective.
                            </li>
                        </ul>
                    </Section>

                    <Section>
                        <h4>Thanks for reading</h4>
                        <p>
                            Thank you for taking out your time to read through this case
                            study, if you have any questions about it, you can send me a <a href="https://twitter.com/sinachpatrick"> message</a>.
                        </p>
                    </Section>
                </div>

                <div className="d-flex justify-content-between">
                    <Link to="/works/3">
                        <StyledButton>
                            <FaArrowLeft /> Back
                        </StyledButton>
                    </Link>

                    <Link to="/works/5">
                        <StyledButton>
                            <FaArrowRight /> Next
                        </StyledButton>
                    </Link>
                </div>
            </StyledCaseStudy>
            <Footer />
        </Container>
    );
};

export default RefarmField;
