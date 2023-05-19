import { useContext } from "react";
import { useParams } from "react-router-dom";

import InfoContext from "../../store/info-context";
import classes from "./SingleInformation.module.css";

const SingleInformation = () => {
  const infoCtx = useContext(InfoContext);

  const params = useParams();

  const paramsInfo = infoCtx.informations.find(
    (info) => info.id === params.infoId
  );

  return (
    <article className={classes.article}>
      <h1>{paramsInfo.title}</h1>
      <p>{paramsInfo.text}</p>
    </article>
  );
};
export default SingleInformation;
