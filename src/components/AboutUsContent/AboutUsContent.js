import { motion } from "framer-motion";

import Card from "../UI/Card";
import classes from "./AboutUsContent.module.css";

const AboutUsContent = () => {
  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.starting}
    >
      <Card>
        <h1>О нама</h1>
        <p>Ми смо станари стамбене заједнице Јурија Гагарина.</p>
      </Card>
    </motion.section>
  );
};

export default AboutUsContent;
