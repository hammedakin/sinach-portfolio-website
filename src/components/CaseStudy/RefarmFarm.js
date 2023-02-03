import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PageLoader from "../PageLoader";
import CSButtons from "./CSButtons";

const RefarmFarm = () => {
  return (
    <Container>
      {<PageLoader age={3000} />}

      <Navbar />
      <StyledRefarmFarm>
        <h2>Refarm for Farmers</h2>

        <Images>
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674156479/Sinachpat/RefarmFarm0_sdvgcb.jpg"
            alt=""
          />
        </Images>
        <div className="Intro">
          <div className="role">
            <h5>My role</h5>
            <p>Lead User Experience (UX) Designer</p>
            <p>Interaction Designer</p>
            <p>UX Researcher</p>
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

        <h3>Overview</h3>
        <p>
          There are several challenges that farmers in Africa face in the food
          and agricultural supply chain. One of the main challenges is a lack of
          access to markets and buyers for their products. Many farmers in
          Africa struggle to find reliable and consistent buyers for their
          crops, which can make it difficult for them to make a living and
          support their families.
        </p>
        <p>
          Another challenge is a lack of access to financial resources and
          credit. Many farmers in Africa do not have access to the capital they
          need to invest in their farms and improve their operations. This can
          limit their ability to grow and sell more crops, and can make it
          difficult for them to compete with larger, more established farmers.
        </p>
        <p>
          In addition, many African farmers face challenges related to
          infrastructure and transportation. Many rural areas lack adequate
          roads, storage facilities, and other infrastructure that is necessary
          to support the farming industry. This can make it difficult for
          farmers to transport their crops to markets, and can lead to spoilage
          and other losses.
        </p>
        <p>
          Overall, these challenges can make it difficult for farmers in Africa
          to thrive and succeed in the agricultural industry. Hence the product
          looking like one which solution is one that is needed.
        </p>

        <h3>Challenge</h3>
        <p>
          I began the design process with Limited knowledge about the Farm
          Produce Supply Chain industry in Nigeria and Africa at large but I
          took a first step to learning all I can within the space. I explored
          the space within a short period of time (days) and learnt about how
          the scope of the process can be broad because of the number of
          stakeholders within the industry. I started the research by brain
          picking the Founders and I learnt these few things that allowed me get
          a concrete understanding of the space.
        </p>
        <Images>
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122558/Sinachpat/farm1_o8unml.png"
            alt="Farm_Image"
          />
        </Images>

        <h3>Hypothesis</h3>
        <p>
          First, the app should be designed to help farmers sync their
          activities with the companies system, which is likely a platform or
          network for buying and selling farm produce. This suggests that the
          app is intended to be used by farmers who are looking to sell their
          products and connect with buyers.
        </p>
        <p>
          Second, the app is intended to help the company system have access to
          and deliver fresh products to consumers and businesses. This indicates
          that the app is focused on facilitating the distribution and sale of
          farm produce.
        </p>
        <p>
          Third, the app allows farmers to provide updates about the status of
          their products, which is used by the system to deliver fresh products
          to consumers and businesses. This means that the app is intended to
          help farmers keep track of their crops and their readiness for
          harvest, and to communicate this information to potential buyers and
          the company admin.
        </p>
        <p>
          Fourth, the app aims to provide farmers with a simple way to manage
          and keep a record of the logistics and other activities of their farm.
          This indicates that the app is intended to be a tool for farmers to
          help them organize and manage their operations, and to provide them
          with useful information and resources to support their farming
          activities.
        </p>
        <p>
          Overall, the statement suggests that the Refarm app is a tool designed
          to help farmers connect with buyers, manage their logistics and
          operations, and sell their products. It is likely focused on the
          distribution and sale of farm produce, and provides farmers with
          valuable insights and information to help them run their farms more
          effectively.
        </p>

        <h3>The Solution Summary</h3>
        <p>
          The Refarm app for farmers is a tool that helps farmers keep track of
          their activities and provide updates about the status of their
          products. This information is used by the app to help deliver fresh
          products to consumers and businesses. The app also offers farmers
          insights, analytics, and tips to help them manage and improve their
          farming operations. By using the app, farmers can easily keep track of
          their logistics and other activities, and have access to valuable
          information and resources to help them run their farms more
          efficiently and effectively.
        </p>

        <h3>Market Research</h3>
        <p>
          The market for farm product logistics is a large and complex one, with
          many companies providing a wide range of solutions for farmers and
          other players in the agricultural industry. These solutions can
          include everything from warehousing and storage solutions to
          transportation and distribution services. Some of the key companies
          providing technological solutions in this market include AGCO
          Corporation, John Deere, and Cargill, Inc, Ninjacart etc. These
          companies offer a range of technologies and services designed to
          improve the efficiency and effectiveness of the farm supply chain,
          from field to market.
        </p>
        <p>
          Currently Farmers have limited access to digital technology according
          to cacm.
        </p>
        <Images>
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122552/Sinachpat/farm2_skqup4.jpg"
            alt="Farm_Image"
          />
        </Images>
        <ul>
          <li>
            We found out that the existing technologies were quite complex and
            not really user-friendly to non tech-savvy users(farmers). Because
            about 53% can’t access any form of digital technology yet that will
            help them do better in their production.
          </li>
          <li>
            We would design to help farmers improve their productivity by
            providing a simplified process for onboarding. This process would
            likely involve providing training and support to help farmers learn
            how to use the app and its features, as well as any other tools or
            resources that are necessary for them to be successful. By providing
            a simplified process and trained personnel to assist with
            onboarding, the app aims to make it easier for farmers to get
            started and become more productive. This can help improve their
            overall efficiency and profitability, and ultimately make a positive
            impact on the agricultural industry as a whole.
          </li>
          <li>
            We would give them access to a user-friendly interface that gives a
            clear hint on how to interact with the system.
          </li>
          <li>
            From Interactions with Farmers to we found they would also need
            regular trainings too to help them avoid the post-harvest and
            pre-harvest losses they experience.
          </li>
        </ul>

        <h3>User Persona</h3>
        <p>
          From the broad research, I was able to understand the ideal farmer we
          are going to serve and represent them as I look to bring a solution to
          the challenges they face.
        </p>
        <Images>
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122570/Sinachpat/farm3_cmwu6v.png"
            alt="Farm_Image"
          />
        </Images>

        <h3>Who are our stakeholders</h3>
        <p>Within the scope of this solution our stakeholders includes:</p>
        <ul>
          <li>The Farmers</li>
          <li>Our field agents</li>
          <li>The businesses</li>
          <li>The company - Refarm</li>
        </ul>

        <h3>Ideations and Solution Statements</h3>
        <p>The features afforded the farmer in the Application are:</p>
        <ul>
          <li>
            The Farmer should be able to create a land/store (called Field on
            our platform).
          </li>
          <li>They can specify the products they grow in the application.</li>
          <li>
            A farmer should be able to manage the listed products in their field
            indicating the stage of the product. This means that a farmer can be
            able to keep us in sync with their farming activities helping us in
            our expectations and plannings.
          </li>
          <li>
            The farmer should also be able to schedule these listings as in when
            they want it to be listed on our users marketplace.
          </li>
          <li>
            The farmer should be able to create multiple fields for different
            products - Yam, Mango, Turkey, and others.
          </li>
          <li>
            We should provide a section where the farmers can be able to see
            their order and manage their transaction activities.
          </li>
          <li>
            The farmers on processing their order should be able to request for
            products they don’t have from other farmers in order to make up.
          </li>
          <li>
            Farmers should be able to see transaction history on their farmland
            and also print their statement.
          </li>
          <li>
            The farmer has a wallet in their app - This is where the funds for
            their transactions goes. They should be able to withdraw to their
            bank accounts or to any other wallet app with future integrations.
          </li>
          <li>
            The farmers investment request: these would come with the packages
            the farmers would have to subscribe to from basic to premium
            (Platinum and Golden) packages. The farmer can use the affordance
            provided in the basic package but if they want to, they can also
            subscribe to the premium package where they get more opportunities.
            This feature also informs the farmer that they must have been active
            users in the platform for upto 6 months before using the investment
            packages.
          </li>
          <li>
            The farmers should also have the chance to upgrade their allowed
            features by subscribing to packages.
          </li>
          <li>
            We should have an explore section where the farmers would see blogs,
            specific tips and hints on how to become better farmers
          </li>
        </ul>

        <h3>Information Architecture</h3>
        <Images>
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122553/Sinachpat/farm4_fahdil.png"
            alt="Farm_Image"
          />
        </Images>

        <h3>Design Elements - Style guide</h3>
        <p>
          Here are some style guides for the design of the product ranging from
          the typography standars, brand logo, color etc.
        </p>
        <Images>
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122555/Sinachpat/farm5_i7cerd.png"
            alt="Farm_Image"
          />
        </Images>

        <h3>UI Design - User friendly Interfaces</h3>
        <Images>
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122571/Sinachpat/farm6_avvx4o.png"
            alt="Farm_Image"
          />
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122567/Sinachpat/farm7_b9bq2y.png"
            alt="Farm_Image"
          />
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122557/Sinachpat/farm8_zeeqap.png"
            alt="Farm_Image"
          />
        </Images>

        <h3>Learnings and Way forward</h3>
        <ul>
          <li>
            I learnt about some nuances in the communication and understanding
            of different farmers during the research process as some farmers
            will give feedbacks without strong basis on the underlying factors
            that causes the effects they see in their farm, here I had to see
            beyond just what they say and view their feedbacks from the first
            principles lens.
          </li>
          <li>
            I intend to conduct user-testing after this design on both
            knowledgable and illiterate farmers for further
            iterations/improvement of the app.
          </li>
        </ul>

        <h3>Thanks for reading</h3>
        <p>
          Thank you for taking out some time to read through this case study, if
          you have any questions about it, you can send me a{" "}
          <a href="mailto:sinachpat@gmail.com"> message</a>..
        </p>

        <CSButtons prev={"5"} next={"7"} />
      </StyledRefarmFarm>
      <Footer />
    </Container>
  );
};

export default RefarmFarm;

const StyledRefarmFarm = styled.main`
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
    margin-bottom: 20px;
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
      font-size: 35px;
      line-height: 38px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
      line-height: 35px;
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
      font-size: 25px;
      line-height: 304px;
    }
    @media (max-width: 480px) {
      font-size: 25px;
      line-height: 30px;
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
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  h5 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #c4c4c4;

    @media (max-width: 1024px) {
      font-size: 18px;
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
  p,
  ul li,
  ol li {
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    color: #c4c4c4;

    @media (max-width: 480px) {
      font-size: 16px;
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
