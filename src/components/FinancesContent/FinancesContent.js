import Card from "../UI/Card";
import classes from "./FinancesContent.module.css";

const FinancesContent = () => {
  return (
    <section className={classes.starting}>
      <Card>
        <h1>Финансије</h1>
        <p>
          Овде ћете моћи да пратите своја дуговања према стамбеној заједници.
        </p>
      </Card>
    </section>
  );
};

export default FinancesContent;
