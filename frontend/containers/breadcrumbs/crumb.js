import Link from "next/link";
import propTypes from "prop-types";
import styled from "styled-components";
import theme from "theme";

const CrumbStyle = styled.span`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
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

const Crumb = ({ title, href, last = false }) => {
  if (last) {
    return (
      <p
        style={{
          display: "inline-block",
          color: "blueviolet",
          fontSize: theme.typeScale.bodyText5,
          padding: "0 2.5px",
        }}
      >
        {title}
      </p>
    );
  }

  return (
    <CrumbStyle>
      <Link href={href}>{title}</Link>
    </CrumbStyle>
  );
};

Crumb.propTypes = {
  title: propTypes.string,
  href: propTypes.string,
  last: propTypes.bool,
};

export default Crumb;
