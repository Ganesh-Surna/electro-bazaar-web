import React from "react";
import Slider from "react-slick";
import classes from "./SliderComponent.module.css"
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ background: "transparent", padding: "0rem 1.65rem 4.15rem 0",  }} onClick={onClick}>
        <FaChevronCircleRight color="rgb(177, 177, 177)" size="2.2rem"  />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ background: "transparent", padding: "0rem 6.95rem 4.15rem 0",  }} onClick={onClick}>
        <FaChevronCircleLeft color="rgb(177, 177, 177)" size="2.2rem"  />
      </div>
    );
  }

export default function SliderComponent({cards}) {

    const settings = {
        className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 7,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div >
        <Slider {...settings}>
          {cards.map((card)=>{
            return <div key={card.id} >
                <div className={classes["card"]}>
                  <p><RiLightbulbFlashLine size="2.2rem"/></p>
                  <p>{card.title}</p>
                </div>
            </div>
          })}
        </Slider>
      </div>
    );
  }