import Crumb from "./crumb";
import { useRouter } from "next/router";
import { useMemo } from "react";

const BreadCrumbs = ():JSX.Element => {
  const router = useRouter();

  const breadcrumbs = useMemo<{href:string; title:string}[]>(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];

    const paths = pathWithoutQuery.split("/").filter((v) => v.length > 0);

    const crumblist = paths.map((subpath, idx) => {
      const href = "/" + paths.slice(0, idx + 1).join("/");
      const title = subpath;
      return { href, title };
    });

    return [{ href: "/", title: "Home" }, ...crumblist];
  }, [router.asPath]);

  return (
    <div
      style={{
        padding: ".25rem 1rem",
        background: "white",
        position: "sticky",
        top: "52.5px",
        right: "0",
        zIndex: "600000",
        backgroundColor:'grey',
        color:'white'
      }}
    >
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </div>
  );
};

export default BreadCrumbs;
