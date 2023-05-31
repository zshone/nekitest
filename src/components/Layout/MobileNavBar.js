import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import classes from "./MobileNavBar.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const Sidebar = (props) => {
  const authCtx = useContext(AuthContext);

  const closeSidebarHandler = () => {
    props.onClose();
  };

  return (
    <nav className={classes["mobile-navigation"]}>
      <div className={classes.close}>
        <button onClick={closeSidebarHandler}></button>
      </div>
      <ul>
        <li>
          <Link onClick={closeSidebarHandler} to="/pocetna">
            Почетна
          </Link>
        </li>
        <li>
          <Link onClick={closeSidebarHandler} to="/o-nama">
            О нама
          </Link>
        </li>
        <li>
          <Link onClick={closeSidebarHandler} to="/obavestenja">
            Обавештења
          </Link>
        </li>
        <li>
          <Link onClick={closeSidebarHandler} to="/korisne-informacije">
            Корисне информације
          </Link>
        </li>
        <li>
          <Link onClick={closeSidebarHandler} to="/galerija">
            Галерија
          </Link>
        </li>
        {authCtx.isLoggedIn && (
          <li>
            <Link onClick={closeSidebarHandler} to="/dokumenta">
              Документа
            </Link>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <Link onClick={closeSidebarHandler} to="/finansije">
              Финансије
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const portalElement = document.getElementById("overlays");

const MobileNavBar = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onHideSidebar} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Sidebar onClose={props.onHideSidebar} />,
        portalElement
      )}
    </Fragment>
  );
};

export default MobileNavBar;
