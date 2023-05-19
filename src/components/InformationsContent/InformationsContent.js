import { AnimatePresence, motion } from "framer-motion";

import classes from "./InformationsContent.module.css";

import Card from "../UI/Card";
import InformationList from "./InformationList";
import SingleInformation from "./SingleInformation";

const InformationsContent = () => {
  return (
    <div className={classes.wrapper}>
      <AnimatePresence key={"/obavestenja"} mode="wait">
        <motion.div animate={{ scale: 1 }} exit={{ scale: 0 }}>
          <Card className={classes.card}>
            <InformationList />
          </Card>
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <Card className={classes.card}>
          <SingleInformation />
        </Card>
      </motion.div>
    </div>
  );
};

export default InformationsContent;
