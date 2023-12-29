import styled from "styled-components";
import { knowledge } from "../../data/data";

const PersonalKnowledge = () => {
  return (
    <StyledPersonalKnowledge>
      <div className="row">
        {knowledge.map(({ title, type, to }, i) => (
          <div className="col-md-6 mb-3" key={i}>
            <a href={to} target="_blank" rel="noreferrer">
              <div className="card-bg">
                <div className="row align-items-center">
                  <div className="col-3">
                    <h6 className="m-0">{type}</h6>
                  </div>
                  <div className="col ">
                    <p className="m-0">{title}</p>
                  </div>
                  <div className="col-2 ">
                    <h4 className="m-0">{" >>>"}</h4>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </StyledPersonalKnowledge>
  );
};

export default PersonalKnowledge;

export const StyledPersonalKnowledge = styled.section`
  margin: 5rem 0;

  .card-bg {
    background: linear-gradient(
      180deg,
      rgba(8, 107, 255, 0.1) 0%,
      rgba(85, 153, 255, 0.1) 100%
    );
    border-radius: 20px;
    padding: 1rem 1rem;
    border: 2px solid #086bff19;

    h6 {
      background: linear-gradient(180deg, #086bff 0%, #003b93 100%);
      border-radius: 10px;
      padding: 1rem;
      height: 4.5rem;
      display: flex;
      align-items: center;
      width: fit-content;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
    }
    h4 {
      color: #ffffff;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }

    @media (max-width: 480px) {
      h6 {
        font-size: 11px;
        line-height: 13px;
      }
      p {
        font-size: 11px;
        line-height: 13px;
      }
    }
  }
`;
