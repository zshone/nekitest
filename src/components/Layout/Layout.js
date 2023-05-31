import { Fragment, useState } from "react";

import classes from "./Layout.module.css";

import Header from "./Header";
import AuthForm from "../Auth/AuthForm";

const Layout = (props) => {
  const [loginInputIsShown, setLoginInputIsShown] = useState(false);

  const showLoginAuthHandler = () => {
    setLoginInputIsShown(true);
  };

  const hideLoginAuthHandler = () => {
    setLoginInputIsShown(false);
  };

  return (
    <Fragment>
      {loginInputIsShown && <AuthForm onHideLogin={hideLoginAuthHandler} />}
      <div className={classes.wrapper}>
        <Header onShowLogin={showLoginAuthHandler} />
        <main className={classes.main}>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
