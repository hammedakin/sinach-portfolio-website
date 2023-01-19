import styled from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  border: none;
  outline: none;
  padding: 14px 47px;
  background: #086bff;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 0 2px #ffffff;
  a {
    color: #ffffff;
    margin-right: 5px;
  }
`;

export const RotateText = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    position: absolute;
    width: 120px;
    height: 120px;
    background: url("https://res.cloudinary.com/dwxv6xoni/image/upload/v1674143312/Sinachpat/Ellipse_1_qyggrw.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
  }
  .text {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: rotateText 10s linear infinite;

    @keyframes rotateText {
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    span {
      position: absolute;
      left: 50%;
      font-size: 8px;
      transform-origin: 0 100px;
    }
  }
`;
