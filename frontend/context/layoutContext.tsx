import { createContext, ReactChildren, useState } from "react";

const initialState = {
  isOpen: true,
  isOpenMobile: false,
  toggleSideDrawer: () => {},
  toggleMobile: () => {},
  onClose: () => {},
};

const LayoutContext = createContext(initialState);

export const LayoutContextProvider = (props: {children : JSX.Element}):JSX.Element => {
  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(true);
  const [showMobile, setShowMobile] = useState<boolean>(false);

  const toggleSideDrawer = () => {
    setShowSideDrawer((prev) => !prev);
  };

  const toggleMobileDrawer = () => {
    setShowMobile((prev) => !prev);
  };

  const onCloseMobileDrawer = () => {
    setShowMobile(false);
  };

  return (
    <LayoutContext.Provider
      value={{
        isOpen: showSideDrawer,
        isOpenMobile: showMobile,
        toggleSideDrawer: toggleSideDrawer,
        toggleMobile: toggleMobileDrawer,
        onClose: onCloseMobileDrawer,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
