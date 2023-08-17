import React, { useState } from "react";
import "./Carousel.scss";

type Props = {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
};

const Carousel: React.FC<Props> = ({
  images,
  step = 3,
  frameSize = 3,
  itemWidth = 130,
  animationDuration = 1000,
  infinite = false,
}) => {
 const [translateX, setTranslateX] = useState(0);

  return (
    <div className="Carousel" style={{ width: itemWidth * images.length }}>
      <ul className="Carousel__list" style={{ width: itemWidth * frameSize }}>
        {images.map((image, index) => (
          <li
            style={{
              // width: itemWidth,
              transform: `translateX(${translateX}px)`,
              transition: `all ${animationDuration / 1000}s ease`,
            }}
          >
            <img 
              src={image} 
              alt={index + ""}  
              style={{
                width: itemWidth,
              }}
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => {
          if(translateX + step * itemWidth > 0 && infinite) {

            setTranslateX((images.length % frameSize)* itemWidth - (images.length * itemWidth));

          }else if (translateX + step * itemWidth > 0) {

            console.log("none");

          } else {

            setTranslateX(translateX + step * itemWidth);

          }
        }}
      >
        Prev
      </button>

      <button
        type="button"
        data-cy="Next"
        onClick={() => {
          if(translateX - step * itemWidth < -(images.length * itemWidth) && infinite) {

            setTranslateX(0);

          } else if (translateX - step * itemWidth < -(images.length * itemWidth)) {

            console.log("none");

          } else {

            setTranslateX(translateX - step * itemWidth);
            
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
