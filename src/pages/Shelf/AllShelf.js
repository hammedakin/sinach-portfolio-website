import styled from "styled-components";

import DOMPurify from "dompurify";
import { shelf } from "../../data/data";


const AllShelf = () => {
   
    return (
        <StyledAllShelf>

            {
                shelf.map(({ title, img, author, content, rating }, i) =>

                    <div className="card-bg" key={i}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="image-div mb-4 mb-md-0">
                                    <img src={img} alt="Refactoring UI" width="100%"
                                        className="mb-4 mb-md-1" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h1>
                                    {title}
                                </h1>
                                <h6>By <span className="fw-bold"> {author}</span></h6>
                                <p className="mt-4"
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(content)
                                    }} />

                                <div className="rating mt-4">
                                    <p> My rating of it’s value:</p>
                                    {rating.map((e) => e)}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </StyledAllShelf>
    );
};

export default AllShelf;

const StyledAllShelf = styled.section`
    margin: 5rem 0;
    
    .card-bg {
background-color: transparent;
margin: 3rem 0;
        h1{
font-weight: 700;
font-size: 48px;
line-height: 58px;
background: linear-gradient(180deg, #91BDFF 0%, #FFFFFF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
        }

        .image-div {
            padding:1rem;
            background: rgba(236, 244, 255, 0.2);
            border-radius: 10px;

        }
        h6 {
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
        }

        p{
 font-weight: 400;
font-size: 16px;
line-height: 26px;
color: #C4C4C4;
        }
    }
        .rating {
            p{
 font-weight: 400;
 font-size: 16px;
 line-height: 19px;    
 color: #FBA704;
}
svg{
 margin: 0 3px;
font-size: 20px;
color: #FBA704;
          }  
    }

    @media (max-width: 480px) {
        h1{
font-size: 32px;
line-height: 39px;
        }

        h6 {
font-size: 14px;
line-height: 17px;
        }

        p{
font-size: 11px;
line-height: 26px;
        }
    }
        .rating {
            p{
font-size: 16px;
line-height: 19px;
}
svg{
 margin: 0 3px;
font-size: 15px;
color: #FBA704;
          }  
    }

`;