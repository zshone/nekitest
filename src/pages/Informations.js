import { InfoContextProvider } from "../store/info-context";

import classes from "./Informations.module.css";

import InformationList from "../components/InformationsContent/InformationList";
import Card from "../components/UI/Card";

const Informations = () => {
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <InfoContextProvider>
          <InformationList />
        </InfoContextProvider>
      </Card>
    </div>
  );
};

export default Informations;
