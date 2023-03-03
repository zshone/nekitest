import Card from "../UI/Card";
import classes from "./AboutUsContent.module.css";

const AboutUsContent = () => {
  return (
    <section className={classes.starting}>
      <Card>
        <h1>О нама</h1>
        <p>Ми смо станари стамбене заједнице Јурија Гагарина.</p>
      </Card>
    </section>
  );
};

export default AboutUsContent;
