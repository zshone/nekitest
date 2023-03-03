import { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../UI/Modal";
import classes from "./ImageGallery.module.css";

import Thumb1 from "../../assets/Thumb1.jpg";
import Thumb2 from "../../assets/Thumb2.jpg";
import Thumb3 from "../../assets/Thumb3.jpg";
import Thumb4 from "../../assets/Thumb4.jpg";
import Thumb5 from "../../assets/Thumb5.jpg";
import Thumb6 from "../../assets/Thumb6.jpg";
import Blok1 from "../../assets/Blok1.jpg";
import Blok2 from "../../assets/Blok2.jpg";
import Blok3 from "../../assets/Blok3.jpg";
import Blok4 from "../../assets/Blok4.jpg";
import Blok5 from "../../assets/Blok5.jpg";
import Blok6 from "../../assets/Blok6.jpg";

const ImageGallery = () => {
  const images = [
    { thumb: Thumb1, img: Blok1 },
    { thumb: Thumb2, img: Blok2 },
    { thumb: Thumb3, img: Blok3 },
    { thumb: Thumb4, img: Blok4 },
    { thumb: Thumb5, img: Blok5 },
    { thumb: Thumb6, img: Blok6 },
  ];
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <Fragment>
      {openModal && (
        <Modal onClose={closeModalHandler}>
          <div className={classes.slideWrap}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={classes.btnClose}
              onClick={closeModalHandler}
            />
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className={classes.btnPrev}
              onClick={prevSlide}
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className={classes.btnNext}
              onClick={nextSlide}
            />
            <div className={classes.fullscreenImage}>
              <img src={images[slideNumber].img} alt="Velika slika" />
            </div>
          </div>
        </Modal>
      )}
      <div className={classes.galleryWrapper}>
        {images.map((slide, index) => {
          return (
            <div className={classes.singleImage} key={index}>
              <img
                src={slide.thumb}
                alt="Slika"
                onClick={() => openModalHandler(index)}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ImageGallery;
