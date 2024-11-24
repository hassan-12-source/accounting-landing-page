import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import testimonials from './data'; // Assuming the data is in a separate file

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <img
          src={testimonials[currentIndex].image}
          alt="Testimonial"
          className="testimonial-image"
        />
        <div className="testimonial-comment">
          {testimonials[currentIndex].comment}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
