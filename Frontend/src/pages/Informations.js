import classes from "./Informations.module.css";

import InformationList from "../components/InformationsContent/InformationList";
import MotionCard from "../components/UI/Card";

const Informations = () => {
  return (
    <MotionCard
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.card}
    >
      <InformationList />
    </MotionCard>
  );
};

export default Informations;
