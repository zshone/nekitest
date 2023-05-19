import { motion } from "framer-motion";
import classes from "./UsefulInfoContent.module.css";

import Card from "../UI/Card";
import LinkList from "./LinkList";
import InfoList from "./InfoList";

const UsefulInfoContent = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.wrapper}
    >
      <Card className={classes.card}>
        <InfoList />
        <LinkList />
      </Card>
    </motion.div>
  );
};

export default UsefulInfoContent;
