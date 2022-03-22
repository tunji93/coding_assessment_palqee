import Backdrop from "components/backdrop";
import DrawerCtx from "./styled";
import propTypes from "prop-types";

interface AppProp {
  isOpen:boolean;
  onClose:Function;
  placement:string;
  children:React.ReactElement

}


const Drawer = (props:AppProp) => {
  const { isOpen, onClose } = props;

  return (
    isOpen? (
      <>
        <Backdrop onConfirm={onClose} />
        <DrawerCtx {...props}>{props.children}</DrawerCtx>
      </>
    ):<></>
  );
};



export default Drawer;
