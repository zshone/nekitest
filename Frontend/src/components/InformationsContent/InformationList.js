import { useContext } from "react";

import classes from "./InformationList.module.css";

import InfoContext from "../../store/info-context";
import InformationFragment from "./InformationFragment";

const InformationList = () => {
  const infoCtx = useContext(InfoContext);

  const infoList = infoCtx.informations?.map((info) => (
    <InformationFragment
      key={info.id}
      id={info.id}
      title={info.title}
      date={info.date}
    />
  ));

  return (
    <ul className={classes.list}>
      {!infoCtx.infoAreLoading && infoList}
      {infoCtx.infoAreLoading && <p>Obaveštenja se učitavaju...</p>}
    </ul>
  );
};

export default InformationList;
