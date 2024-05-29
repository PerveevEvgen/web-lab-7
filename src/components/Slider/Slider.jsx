import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import clsx from "clsx";
import './slider.css';


import PropTypes from 'prop-types';

export const Slider1 = ({ images, current }) => {
  const [imageIndex, setImageIndex] = useState(current);

  const showNextImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => {
      if (prev === images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  const showPreviousImage = (e) => {
    e.stopPropagation();
     setImageIndex((prev) => {
      if (prev === 0) {
        return images.length - 1;
      }
      return prev - 1;
  })
}

  return (
    <div className='sliderContainer'>
      <img src={images[imageIndex]} alt="" className='sliderImage'/>
      <button onClick={showPreviousImage} className={clsx('sliderButton', 'sliderButton__left') }>
        <ArrowBigLeft />
      </button>
      <button onClick={showNextImage} className={clsx('sliderButton', 'sliderButton__right')}>
        <ArrowBigRight />
      </button>
    </div>
  );
};

Slider1.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    current: PropTypes.number
};