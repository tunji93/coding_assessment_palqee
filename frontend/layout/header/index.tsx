import React, { useContext } from "react";
import LayoutContext from "context/layoutContext";
import { IoMenuOutline } from "react-icons/io5";
import Drawer from "containers/drawer";
import Nav from "layout/sidebar/Nav";
import Link from "next/link";
import { useRouter } from "next/router";

const Header  = ():JSX.Element => {
  const router = useRouter();
  const ctx = useContext(LayoutContext);
  const date = new Date();

  return (
    <>
      <header>
        <IoMenuOutline
          size={25}
          className="menuIconMobile"
          onClick={ctx.toggleMobile}
        />
        <IoMenuOutline
          size={25}
          className="menuIcon"
          onClick={ctx.toggleSideDrawer}
        />
        <p>{date.toDateString()}</p>
      </header>
      <Drawer isOpen={ctx.isOpenMobile} onClose={ctx.onClose} placement='left'>
        <Nav>
          <span className={router.pathname === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </span>

          <details>
            <summary>Star Wars</summary>
            <span
              className={/starwars*/g.test(router.pathname) ? "active" : ""}
            >
              <Link href="/starwars/characters">Characters</Link>
            </span>
          </details>
        </Nav>
      </Drawer>
    </>
  );
};

export default Header;
