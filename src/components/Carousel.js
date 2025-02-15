import { useState } from "react";

const images = [
  "https://via.placeholder.com/800x300?text=Slide+1",
  "https://via.placeholder.com/800x300?text=Slide+2",
  "https://via.placeholder.com/800x300?text=Slide+3",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <img src={images[currentIndex]} alt="Carousel Slide" className="w-full h-auto" />
      <button onClick={nextSlide} className="absolute top-1/2 right-4 bg-white px-2 py-1">
        Next
      </button>
    </div>
  );
};

export default Carousel;
