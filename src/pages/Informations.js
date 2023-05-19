import { InfoContextProvider } from "../store/info-context";
import { motion } from "framer-motion";

import classes from "./Informations.module.css";

import InformationList from "../components/InformationsContent/InformationList";
import Card from "../components/UI/Card";

const Informations = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.wrapper}
    >
      <Card className={classes.card}>
        <InfoContextProvider>
          <InformationList />
        </InfoContextProvider>
      </Card>
    </motion.div>
  );
};

export default Informations;
