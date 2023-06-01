import MotionCard from "../UI/Card";
import classes from "./DocumentsContent.module.css";

const DocumentsContent = () => {
  return (
    <MotionCard
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.card}
    >
      <h1>Документа</h1>
      <p>Овде ћете моћи да видите разну документацију.</p>
    </MotionCard>
  );
};

export default DocumentsContent;
