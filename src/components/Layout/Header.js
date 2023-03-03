import { useState } from "react";

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
    <header>
      {openSidebar && <MobileNavBar onHideSidebar={closeSidebarHandler} />}
      <DesktopNavBar
        onShowSidebar={openSidebarHandler}
        onShowLogin={props.onShowLogin}
      />
    </header>
  );
};

export default Header;
