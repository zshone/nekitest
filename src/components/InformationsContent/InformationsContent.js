import { AnimatePresence } from "framer-motion";

import classes from "./InformationsContent.module.css";

import MotionCard from "../UI/Card";
import InformationList from "./InformationList";
import SingleInformation from "./SingleInformation";

const InformationsContent = () => {
  return (
    <div className={classes.wrapper}>
      <AnimatePresence key={"/obavestenja"} mode="wait">
        <MotionCard
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={classes.infoListCard}
        >
          <InformationList />
        </MotionCard>
      </AnimatePresence>
      <MotionCard
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className={classes.singleInfoCard}
      >
        <SingleInformation />
      </MotionCard>
    </div>
  );
};

export default InformationsContent;
