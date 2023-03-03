import { useContext } from "react";
import { NavLink } from "react-router-dom";

import InfoContext from "../../store/info-context";

import classes from "./InformationFragment.module.css";

const InformationFragment = (props) => {
  const infoCtx = useContext(InfoContext);

  const currentIdIsSelected = infoCtx.selectedId === props.id;

  const listItemClasses = currentIdIsSelected
    ? `${classes["list-item"]} ${classes.active}`
    : classes["list-item"];

  const idClickHandler = () => {
    infoCtx.giveId(props.id);
  };

  return (
    <li className={listItemClasses} onClick={idClickHandler}>
      <NavLink to={`/obavestenja/${props.id}`} activeClassName={classes.active}>
        <h2>{props.date}</h2>
        <p>{props.title}</p>
      </NavLink>
    </li>
  );
};

export default InformationFragment;
