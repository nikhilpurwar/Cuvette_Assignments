
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Home.css'

const serviceImages = [
  { url: 'https://ts4.mm.bing.net/th?id=OIP.1-tWzofJXQq-jvtrMl8b_AHaE8&pid=15.1', alt: 'Milky Way 1' },
  { url: 'https://ts2.mm.bing.net/th?id=OIP.H6AQtfKAzbE20z8JDReUdwHaLH&pid=15.1', alt: 'Milky Way 2' },
  { url: 'https://ts4.mm.bing.net/th?id=OIP.Ep4vsZ8oECerP4p7xmr-OwHaEK&pid=15.1', alt: 'Volcano Eruption' },
  { url: 'https://th.bing.com/th/id/OIP.zZdTtVhbkRqpYa1FiCYnkQHaFj?w=230&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3', alt: 'Milky Way 3' }
];

export const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="services-section">
      <h2 className="title">Services</h2>
      <div className="services-slider-container">
        <Slider {...settings}>
          {serviceImages.map((img, idx) => (
            <div key={idx}>
              <img
                src={img.url}
                alt={img.alt}
                className="service-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}