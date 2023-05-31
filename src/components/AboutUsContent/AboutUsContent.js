import ArticleText from "./ArticleText";
import MotionCard from "../UI/Card";

import classes from "./AboutUsContent.module.css";

const AboutUsContent = () => {
  return (
    <MotionCard
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.card}
    >
      <ArticleText />
    </MotionCard>
  );
};

export default AboutUsContent;
