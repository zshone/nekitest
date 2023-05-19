import { motion } from "framer-motion";
import classes from "./GalleryContent.module.css";

import Card from "../UI/Card";
import ImageGallery from "./ImageGallery";

const GalleryContent = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.wrapper}
    >
      <Card className={classes.card}>
        <ImageGallery />
      </Card>
    </motion.div>
  );
};

export default GalleryContent;
