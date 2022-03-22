import { useContext } from "react";
import LayoutContext from "context/layoutContext";
import Link from "next/link";
import Nav from "./Nav";
import { useRouter } from "next/router";

const SideBar = () => {
  const ctx = useContext(LayoutContext);
  const router = useRouter();

  return (
    ctx.isOpen ? (
      <aside>
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
      </aside>
    ): <></>
  );
};

export default SideBar;
