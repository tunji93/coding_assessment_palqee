import BreadCrumbs from "containers/breadcrumbs";
import { ReactChild, ReactChildren } from "react";
import StarWarsStyled from "./styled";

const StarWars = (props:{children :JSX.Element}):JSX.Element => {
  return (
    <>
      <BreadCrumbs />
      <StarWarsStyled>
        <div>{props.children}</div>
      </StarWarsStyled>
    </>
  );
};

export default StarWars;
