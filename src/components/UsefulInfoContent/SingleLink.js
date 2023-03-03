import { Link } from "react-router-dom";

import classes from "./SingleLink.module.css";

const SingleLink = (props) => {
  return (
    <li className={classes["list-item"]}>
      <Link to={{ pathname: `${props.url}` }} target="_blank">
        {props.title}
      </Link>
    </li>
  );
};

export default SingleLink;
