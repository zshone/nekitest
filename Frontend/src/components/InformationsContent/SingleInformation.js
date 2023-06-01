import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./SingleInformation.module.css";
import InfoContext from "../../store/info-context";

const SingleInformation = () => {
  const { informations } = useContext(InfoContext);
  const [selectedInfo, setSelectedInfo] = useState();
  const params = useParams();

  useEffect(() => {
    const findInfoHandler = () => {
      const singleInfo = informations?.find(
        (info) => info.id === params.infoId
      );
      setSelectedInfo(singleInfo);
    };
    findInfoHandler();
  }, [informations, params.infoId]);

  return (
    <article className={classes.article}>
      <h1>{selectedInfo?.title}</h1>
      <p>{selectedInfo?.text}</p>
    </article>
  );
};

export default SingleInformation;
