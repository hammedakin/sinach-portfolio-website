import { useEffect, useState } from "react";
import styled from "styled-components";

const ThoughtShared = () => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  const username = `sinachpat`;
  const RSSUrl = `https://medium.com/feed/@${ username }`;
  const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${ RSSUrl }`;

  const getMediumData = async () => {
    setloading(true);
    try {
      const response = await fetch(RSSConverter);
      const data = await response.json();
      setdata(data.items);
      setloading(false);
      return data;
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getMediumData();
  }, []);

  return (
    <StyledThoughtShared>
      <h4 className="mb-5">Some of thoughts shared in writing</h4>
      {loading ?
        <div className="text-center">
          <h5 className="my-5"> Loading ...</h5>
        </div> :
        <div className="row">
          {data.slice(0, 3)?.map(({ title, content, thumbnail, guid }, i) => (
            <div className="col-md-4 mb-3 " key={i}>
              <a href={guid} target="_blank" rel="noreferrer">
                <div className="card h-100">
                  <div className="">
                    <img
                      src={thumbnail}
                      alt="Sonr"
                      width="100%"
                    />
                  </div>
                  <div className="px-2 my-3">
                    <h5>{title}</h5>
                    {/* <p>{content}</p> */}
                    <i> {"->"} Written by Osinachi Patrick</i>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      }
    </StyledThoughtShared>
  );
};

export default ThoughtShared;

const StyledThoughtShared = styled.section`
  padding: 2rem 0;

  h4 {
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
    background: linear-gradient(180deg, #ffffff 0%, #408cff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: #ffffff;
    padding: 5px 5px 20px 5px;

    h5 {
      font-weight: 800;
      font-size: 20px;
      line-height: 31px;
    }
    p {
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
    }
    i {
      font-size: 10px;
    }
  }

  @media (max-width: 768px) {
    h4 {
      font-weight: 800;
      font-size: 20px;
      line-height: 30px;
    }
  }
`;
