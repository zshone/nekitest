import MotionCard from "../UI/Card";
import classes from "./HomePageContent.module.css";

const HomePageContent = () => {
  return (
    <MotionCard
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.card}
    >
      <h1>Јурија Гагарина 122</h1>
      <p>Добродошли на сајт стамбене заједнице Јурија Гагарина 122!</p>
    </MotionCard>
  );
};

export default HomePageContent;
