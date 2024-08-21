import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

const ComponentSection = styled.div`
  padding: 30px 20px 40px;
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #d8d8d8;
`;

const Title = styled.h3``;

const DefaultLayout = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  border-radius: 30px;
  border: 1px solid #d8d8d8;
`;
const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  /* background-color: rgba(0, 0, 0, 0.3); */
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 99999;
  padding: 30px;
`;

const globalStyle = css`
  body {
    overflow: hidden;
  }
`;
const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};

export {
  ComponentSection,
  TopSection,
  Title,
  DefaultLayout,
  Wrapper,
  GlobalStyle,
};
