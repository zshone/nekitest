import MotionCard from "../UI/Card";
import classes from "./FinancesContent.module.css";

const FinancesContent = () => {
  return (
    <MotionCard
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.card}
    >
      <h1>Финансије</h1>
      <p>Овде ћете моћи да пратите своја дуговања према стамбеној заједници.</p>
    </MotionCard>
  );
};

export default FinancesContent;
