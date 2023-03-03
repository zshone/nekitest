import Card from "../UI/Card";
import classes from "./DocumentsContent.module.css";

const DocumentsContent = () => {
  return (
    <section className={classes.starting}>
      <Card>
        <h1>Документа</h1>
        <p>Овде ћете моћи да видите разну документацију.</p>
      </Card>
    </section>
  );
};

export default DocumentsContent;
