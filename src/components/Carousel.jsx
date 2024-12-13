import { useState, useEffect } from "react";

const images = ["/abt1.jpg", "/abt2.jpg", "/abt3.jpg", "/slider-3-2.jpg"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[300px]">
      <div className="absolute inset-0 bg-gradient-to-l from-teal-950/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-transparent z-10 pointer-events-none" />

      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }} // Adjust for 4 images
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-[25%] flex-shrink-0">
            {" "}
            {/* 25% for 4 images */}
            <img
              src={src}
              alt={`Slide ${index}`}
              className="h-full w-full object-cover"
              style={{ height: "300px" }} // Fixed height
            />
          </div>
        ))}
        {/* Duplicate images for seamless scrolling effect */}
        {images.map((src, index) => (
          <div key={`duplicate-${index}`} className="min-w-[25%] flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="h-full w-full object-cover"
              style={{ height: "300px" }} // Fixed height
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
