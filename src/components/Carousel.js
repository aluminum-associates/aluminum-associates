import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = props => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
  }

  return <Slider {...settings}>{props.children}</Slider>
}

export default Carousel
