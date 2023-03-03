import classes from "./GalleryContent.module.css";
import Card from "../UI/Card";
import ImageGallery from "./ImageGallery";

const GalleryContent = () => {
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <ImageGallery />
      </Card>
    </div>
  );
};

export default GalleryContent;
