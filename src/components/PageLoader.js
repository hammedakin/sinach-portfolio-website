import React from 'react';
import { FadeLoader } from 'react-spinners';
import styled from 'styled-components';

const PageLoader = (props) => {
  return (
    <>
      <StyledPageLoader>
        <FadeLoader color={"#fafafa"} loading={props.loading} size={200} margin={15} />
      </StyledPageLoader>
    </>
  );
};

export default PageLoader;


const StyledPageLoader = styled.div`
   width: 100%;
  height: 100vh;
  background: #000000ef;
  display: grid;
  place-items: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;

`;