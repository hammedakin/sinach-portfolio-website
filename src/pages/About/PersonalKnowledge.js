import styled from "styled-components";
import { knowledge } from "../../data/data";


const PersonalKnowledge = () => {
    return (
        <StyledPersonalKnowledge>

            <div className="row">
                {
                    knowledge.map(({ title, type }, i) =>
                        <div className="col-md-6 mb-3" key={i}>
                            <div className="card-bg">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <h6 className="">{type}</h6>
                                    </div>
                                    <div className="col">
                                        <p> {title}{' >>>'} </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </StyledPersonalKnowledge>
    );
};

export default PersonalKnowledge;

export const StyledPersonalKnowledge = styled.section`
    margin: 5rem 0;
    
    .card-bg {
background: linear-gradient(180deg, rgba(8, 107, 255, 0.1) 0%, rgba(85, 153, 255, 0.1) 100%);
border-radius: 20px;
padding: 1rem 1rem;
border: 2px solid #086bff19;

h6{
background: linear-gradient(180deg, #086BFF 0%, #003B93 100%);
border-radius: 10px;
padding: 1rem;
height: 4.5rem;
display: flex;
align-items: center;
width: fit-content;
font-weight: 700;
font-size: 24px;
line-height: 29px;

}

p{
font-weight: 400;
font-size: 16px;
line-height: 24px;
}

    @media (max-width: 480px) {
    h6{
 font-size: 11px;
line-height: 13px;
    }
    p{
font-size: 11px;
line-height: 13px;
    }
    }
}

`;