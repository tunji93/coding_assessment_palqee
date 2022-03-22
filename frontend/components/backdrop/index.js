import BackdropCtx from "./styled";
import propTypes from "prop-types";
import { useEffect } from "react";

const Backdrop = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  });

  return <BackdropCtx onClick={props.onConfirm}>{props.children}</BackdropCtx>;
};

Backdrop.propTypes = {
  onConfirm: propTypes.func,
};

export default Backdrop;
