import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./DesktopNavBar.module.css";

const DesktopNavBar = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();

    if (
      history.location.pathname === "/dokumenta" ||
      history.location.pathname === "/finansije"
    ) {
      history.replace("/pocetna");
    }
  };

  return (
    <nav className={classes["main-navigation"]}>
      <button className={classes.toggle} onClick={props.onShowSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/pocetna">
            Почетна
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/o-nama">
            О нама
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/obavestenja">
            Обавештења
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/korisne-informacije">
            Корисне информације
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/galerija">
            Галерија
          </NavLink>
        </li>
      </ul>
      <div>
        <ul>
          {authCtx.isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/dokumenta">
                Документа
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/finansije">
                Финансије
              </NavLink>
            </li>
          )}
        </ul>
        {!authCtx.isLoggedIn && (
          <button className={classes.btn__logout} onClick={props.onShowLogin}>
            Пријави се
          </button>
        )}
        {authCtx.isLoggedIn && (
          <button className={classes.btn__logout} onClick={logoutHandler}>
            Одјави се
          </button>
        )}
      </div>
    </nav>
  );
};

export default DesktopNavBar;
