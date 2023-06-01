import { useState } from "react";

import classes from "./Header.module.css";

import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Header = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const openSidebarHandler = () => {
    setOpenSidebar(true);
  };

  const closeSidebarHandler = () => {
    setOpenSidebar(false);
  };

  return (
    <header className={classes.header}>
      {openSidebar && <MobileNavBar onHideSidebar={closeSidebarHandler} />}
      <DesktopNavBar
        onShowSidebar={openSidebarHandler}
        onShowLogin={props.onShowLogin}
      />
    </header>
  );
};

export default Header;
