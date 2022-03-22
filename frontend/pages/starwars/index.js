import BreadCrumbs from "containers/breadcrumbs";
import StarWarsStyled from "./styled";

const StarWars = (props) => {
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
