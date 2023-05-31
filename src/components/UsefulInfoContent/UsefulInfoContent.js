import classes from "./UsefulInfoContent.module.css";

import MotionCard from "../UI/Card";
import LinkList from "./LinkList";
import InfoList from "./InfoList";

const UsefulInfoContent = () => {
  return (
    <MotionCard
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.card}
    >
      <InfoList />
      <LinkList />
    </MotionCard>
  );
};

export default UsefulInfoContent;
