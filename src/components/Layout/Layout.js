import { Fragment, useState } from "react";
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
      <Header onShowLogin={showLoginAuthHandler} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
