import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const ThoughtShared = () => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  // const endpoint = 'https://medium.com/';
  // const endpoint = 'https://medium2.p.rapidapi.com/';
  // const user_id = '@sinachpat';


  axios.get(`${ endpoint }feed/${ user_id }`,
  //  {
  //   headers: {
  //     'X-RapidAPI-Key': '55943390a9mshbed19256ae6092cp17efedjsn91739d2ff04e',
  //     'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
  //   }
  // }
  )
  const endpoint = "https://medium2.p.rapidapi.com/";
  const user_id = "1985b61817c3";

  axios
    .get(`${endpoint}user/${user_id}/articles`, {
      headers: {
        "X-RapidAPI-Key": "55943390a9mshbed19256ae6092cp17efedjsn91739d2ff04e",
        "X-RapidAPI-Host": "medium2.p.rapidapi.com",
      },
    })
    .then((res) => {
      if (res.data.success === false) {
        setloading(false);
      } else {
        setloading(false);
        setdata(res);
      }
    })
    .catch((error) => {
      setloading(false);
    });

  console.log(data);

  const thought = [
    {
      title: "My experience working on Sonr Learn",
      content:
        "Just scribbles from my days at Sonr Inc. as the product lead of the Sonr Learn Program. From the ideation period to design and implementation.",
    },
    {
      title: "My experience working on Sonr Learn",
      content:
        "Just scribbles from my days at Sonr Inc. as the product lead of the Sonr Learn Program. From the ideation period to design and implementation.",
    },
    {
      title: "My experience working on Sonr Learn",
      content:
        "Just scribbles from my days at Sonr Inc. as the product lead of the Sonr Learn Program. From the ideation period to design and implementation.",
    },
  ];

  return (
    <StyledThoughtShared>
      <h4 className="mb-5">Some of thoughts shared in writing</h4>
      <div className="row">
        {thought.map(({ title, content }, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="card">
              <div className="">
                <img
                  src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122508/Sinachpat/sonr_yyf96u.png"
                  alt="Sonr"
                  width="100%"
                />
              </div>
              <div className="px-2 my-3">
                <h5>{title}</h5>
                <p>{content}</p>
                <i> {"->"} Written by Osinachi Patrick</i>
              </div>
            </div>
          </div>
        ))}
      </div>
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
