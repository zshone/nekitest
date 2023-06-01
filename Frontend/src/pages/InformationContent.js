import { AnimatePresence, motion } from "framer-motion";

import InformationsContent from "../components/InformationsContent/InformationsContent";

import classes from "./InformationContent.module.css";

const InformationContent = () => {
  return (
    <AnimatePresence key={"/obavestenja"}>
      <motion.div
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className={classes.pageWrapper}
      >
        <InformationsContent />
      </motion.div>
    </AnimatePresence>
  );
};

export default InformationContent;
