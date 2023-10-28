import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonials() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          className: "center",
          centerMode: false,
          infinite: true,
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };
  return (
    <div
      className="container p-4 sm:p-10 w-full sm:w-1/2 hero-section m-auto mb-20"
      id="experience"
    >
      <h1 className="font-bold text-2xl heading mb-10">
        What people say about my work
      </h1>
      <Slider {...settings}>
        <div className="slide-custom">
          <div>
            <div>
              <p className="text-gray-400 text-sm">
                Vishal was great help. His expertise really brought our project
                to life
              </p>
              <p className="text-right mt-2 text-xs">- harryjpm1707</p>
            </div>
          </div>
        </div>
        <div className="slide-custom">
          <div>
            <div>
              <p className="text-gray-400 text-sm">
                Great work. Made sure all the requirements were met.
              </p>
              <p className="text-right mt-2 text-xs">- awaiszafar705</p>
            </div>
          </div>
        </div>
        <div className="slide-custom">
          <div>
            <div>
              <p className="text-gray-400 text-sm">
                I promise you, this is the best person I have ever worked with.
                Vishal is very professional in Front end development and he is
                very polite and communicative. He always made sure I am
                satisfied with his work and he made sure to put a lot of hard
                work in order to make the project very successful. I recommend
                him to everyone! You won’t be disappointed
              </p>
              <p className="text-right mt-2 text-xs">- annadzhurko</p>
            </div>
          </div>
        </div>
        <div className="slide-custom">
          <div>
            <div>
              <p className="text-gray-400 text-sm">
                The seller did a fantastic job; he worked on the order and
                didn't give up on it, although it was full of bugs. I will come
                back and use his service again. Totally recommend him.
              </p>
              <p className="text-right mt-2 text-xs">- v000da</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
