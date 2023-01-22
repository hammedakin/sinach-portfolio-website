import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  padding: 0px 43px;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 0.019rem solid #ffffff;
  border-radius: 10px;
  justify-content: space-between;
  z-index: 10000 !important;

  .nav-btn {
    border: none;
    outline: none;
    color: #ffffff;
    background: transparent;
    cursor: pointer;
    font-size: 1.8rem;
    display: none;
    opacity: 0;
  }
  .nav-close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #ffffff;
    border-radius: 3px;
  }
  @media (max-width: 1024px) {
    /* position: fixed;
    top: 1rem; */
    height: 49px;
    padding: 0px 14px;
    border-radius: 3px;
    .des {
      width: 70px;
      height: 30px;
    }
    .nav-btn {
      display: block;
      opacity: 1;
    }
    .responsive {
      transform: none;
    }
  }
`;

export const Nav = styled.nav`
  a {
    text-decoration: none;
    color: #ffffff;
    margin-left: 70px;
  }
  .activeClassName {
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    border-bottom: 1px solid;
  }
  .resume {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #4f95ff;
  }
  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    z-index: 1;
    background: #0052cc;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 150px 20px 0px 0px;
    gap: 1.2em;
    transition: 1s;
    transform: translateY(-100vh);
    .resume {
      color: #b3d1ff;
    }

    a {
      color: #b3d1ff;
      margin-bottom: 60px;
      &:active {
        border-bottom: 1px solid #ffffff;
      }
    }
  }
`;
