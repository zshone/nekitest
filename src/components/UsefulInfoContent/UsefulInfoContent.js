import classes from "./UsefulInfoContent.module.css";

import Card from "../UI/Card";
import LinkList from "./LinkList";
import InfoList from "./InfoList";

const UsefulInfoContent = () => {
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <InfoList />
        <LinkList />
      </Card>
    </div>
  );
};

export default UsefulInfoContent;
