import InformationsContent from "../components/InformationsContent/InformationsContent";
import { InfoContextProvider } from "../store/info-context";

import classes from "./InformationContent.module.css";
import { AnimatePresence, motion } from "framer-motion";

const InformationContent = () => {
  return (
    <InfoContextProvider>
      <AnimatePresence key={"/obavestenja"}>
        <motion.div
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={classes.pageWrapper}
        >
          <InformationsContent />
        </motion.div>
      </AnimatePresence>
    </InfoContextProvider>
  );
};

export default InformationContent;
