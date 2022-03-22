import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
    0% {
        width: 0;
    }
    100%{
        width: 17.5rem;
    }
`;

const DrawerCtx = styled.div`
  position: fixed;
  ${({ placement }) => (placement === "bottom" ? "bottom: 0;" : "top: 0;")};
  ${({ placement }) => (placement === "right" ? "right: 0" : "left: 0;")};
  width: ${({ placement }) =>
    placement === "left" || placement === "right" ? "17.5rem" : "100%"};
  height: ${({ placement }) =>
    placement === "bottom" || placement === "top" ? "25rem" : "100vh"};
  animation: ${slideInLeft} 0.2s;
  padding: 1rem;
  z-index: 5000001;
  background: ${({ theme }) => theme.colors.white};
`;

export default DrawerCtx;
