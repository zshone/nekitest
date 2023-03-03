import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/Layout";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Informations from "./pages/Informations";
import UsefulInfo from "./pages/UsefulInfo";
import Gallery from "./pages/Gallery";
import Documents from "./pages/Documents";
import Finances from "./pages/Finances";
import InformationContent from "./pages/InformationContent";

function App() {
  const authCtx = useContext(AuthContext);

  const documents = authCtx.isLoggedIn ? (
    <Documents />
  ) : (
    <Redirect to="/pocetna" />
  );

  const finances = authCtx.isLoggedIn ? (
    <Finances />
  ) : (
    <Redirect to="/pocetna" />
  );

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/pocetna" />
        </Route>
        <Route path="/pocetna">
          <HomePage />
        </Route>
        <Route path="/o-nama">
          <AboutUs />
        </Route>
        <Route path="/obavestenja" exact>
          <Informations />
        </Route>
        <Route path="/obavestenja/:infoId">
          <InformationContent />
        </Route>
        <Route path="/korisne-informacije">
          <UsefulInfo />
        </Route>
        <Route path="/galerija">
          <Gallery />
        </Route>
        <Route path="/dokumenta">{documents}</Route>
        <Route path="/finansije">{finances}</Route>
      </Switch>
    </Layout>
  );
}

export default App;
