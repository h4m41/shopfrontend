import React from "react";

const Slider = () => {
  // Dummy data for the slider
  const slides = [
    {
      image: "/src/assets/images/suit.png",
      header: "SUITS",
      text: "Fashion that Fits: Shop High-Quality Clothing for Every Occasion!",
    },
    {
      image: "/src/assets/images/dress2.png",
      header: "SUMMER SALE",
      text: "Elevate Your Wardrobe: Find Your Perfect Look Here!",
    },
    {
      image: "/src/assets/images/casual.png",
      header: "CASUAL ",
      text: "Discover Your Style: Shop the Latest Fashion Trends Today!",
    },
  ];

  // State to track the active slide
  const [activeSlide, setActiveSlide] = React.useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex items-center justify-center  ">
      <div className="relative md:h-[600px] h-60  flex w-full">
        {/* Left side (Image) */}
        <div className="md:w-2/5 flex justify-center w-3/4 ">
          <img
            src={slides[activeSlide].image}
            alt="Slider"
            className="h-full  object-cover "
          />
        </div>

        {/* Right side (Content) */}
        <div className="md:p-8 p-2 flex md:gap-16 gap-2 flex-col justify-center">
          <h1 className=" text-3xl  md:text-8xl font-bold mb-4 ">
            {slides[activeSlide].header}
          </h1>
          <p className="md:text-xl w-9/12 md:tracking-wide text-sm md:uppercase ">
            {" "}
            {slides[activeSlide].text}
          </p>
          <button className="md:px-4 md:py-3  py-2 w-32 md:w-40 hover:shadow-md border-2 border-trueGray-700 hover:bg-trueGray-200 rounded">
            Shop Now &#10148;
          </button>
        </div>

        {/* Arrows */}
        <div className="absolute  top-1/2   transform -translate-y-1/2">
          <button
            className="md:px-8 md:py-6 bg-opacity-50 bg-gray-200 hover:shadow-md px-4 py-2 font-bold md:text-3xl rounded-full text-gray-500 "
            onClick={prevSlide}
          >
            &lt;
          </button>
        </div>
        <div className="absolute right-0  top-1/2 transform -translate-y-1/2">
          <button
            className="md:px-8 md:py-6 bg-opacity-50 bg-gray-200  hover:shadow-md px-4 py-2 font-bold md:text-3xl rounded-full text-gray-500 "
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
