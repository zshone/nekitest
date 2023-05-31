import React from "react";
import { motion } from "framer-motion";

import classes from "./Card.module.css";

const Card = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${classes.card} ${props.className}`}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
});

const MotionCard = motion(Card);

export default MotionCard;
