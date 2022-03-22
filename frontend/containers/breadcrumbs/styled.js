import styled from "styled-components";

export const CrumbStyle = styled.span`
a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 2.5px;
  position: relative;
  padding-right: 10px;
  font-size: ${({ theme }) => theme.typeScale.bodyText5};

  &::after {
    content: "/";
    height: 100%;
    line-height: 1;
    width: max-content;
    position: absolute;
    top: 0;
    right: 1px;
    font-size: ${({ theme }) => theme.typeScale.bodyText4};
  }
}
`;