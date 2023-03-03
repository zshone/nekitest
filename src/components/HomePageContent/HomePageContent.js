import Card from "../UI/Card";
import classes from "./HomePageContent.module.css";

const HomePageContent = () => {
  return (
    <section className={classes.starting}>
      <Card>
        <h1>Јурија Гагарина</h1>
        <p>Добродошли на сајт стамбене заједнице Јурија Гагарина!</p>
      </Card>
    </section>
  );
};

export default HomePageContent;
