import { motion } from "framer-motion";
import Card from "../UI/Card";
import classes from "./HomePageContent.module.css";

const HomePageContent = () => {
  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.starting}
    >
      <Card>
        <h1>Јурија Гагарина</h1>
        <p>Добродошли на сајт стамбене заједнице Јурија Гагарина!</p>
      </Card>
    </motion.section>
  );
};

export default HomePageContent;
