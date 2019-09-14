import React, { useState, useEffect } from "react";
import Navbar from "./NavbarApp";
import Sidebar from "./SidebarApp";

const mql = window.matchMedia(`(min-width: 800px)`);
function useSidebarIsOpen() {
  const [useSidebar, setUseSidebar] = useState(mql.matches);
  useEffect(() => {
    function handleMediaQueryChanged() {
      setUseSidebar(mql.matches);
    }

    mql.addEventListener("change", handleMediaQueryChanged);
    return function cleanup() {
      mql.removeEventListener("change", handleMediaQueryChanged);
    };
  }, []);
  return [useSidebar, setUseSidebar];
}

const ResponsiveApp: React.FC = () => {
  const [useSidebar] = useSidebarIsOpen();
  if (useSidebar) {
    return <Sidebar />;
  }
  return <Navbar />;
};

export default ResponsiveApp;
