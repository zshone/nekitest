import classes from "./GalleryContent.module.css";

import MotionCard from "../UI/Card";
import ImageGallery from "./ImageGallery";

const GalleryContent = () => {
  return (
    <MotionCard
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={classes.card}
    >
      <ImageGallery />
    </MotionCard>
  );
};

export default GalleryContent;
