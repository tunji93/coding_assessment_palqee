import Link from "next/link";
import propTypes from "prop-types";
import {CrumbStyle} from './styled'
import theme from "theme";



interface AppProps  {
  title: string;
  href: string;
  last: boolean;
};

const Crumb = ({ title, href, last = false }:AppProps): JSX.Element => {
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


export default Crumb;
