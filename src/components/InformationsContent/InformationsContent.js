import classes from "./InformationsContent.module.css";

import Card from "../UI/Card";
import InformationList from "./InformationList";
import SingleInformation from "./SingleInformation";

const InformationsContent = () => {
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <InformationList />
      </Card>
      <Card className={classes.card}>
        <SingleInformation />
      </Card>
    </div>
  );
};

export default InformationsContent;
