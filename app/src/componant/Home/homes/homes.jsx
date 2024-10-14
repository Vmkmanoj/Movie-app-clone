import React, { useState, useEffect } from "react";
import "../homes/homes.css"; // Ensure your CSS file is linked correctly

function Homes(props) {
  const { homeData } = props.ele; // Destructure homeData from props.ele
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homeData.length);
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + homeData.length) % homeData.length);
  };

  // Automatically change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [homeData.length]);

  return (
    <div className="homes-container">
 
      <div className="slideshow-container">
        {homeData.map((item, index) => (
          <div key={item.id} className={`slideshow-item ${index === currentIndex ? 'active' : ''}`}>
            <img
              src={item.cover}
              alt={item.name}
              className="slideshow-image"
            />
            <div className="item-details">
              <h2 className="text-7xl text-white">{item.name}</h2>
              <p className="text-2xl text-white">Rating: {item.rating}</p>
              <p className="text-2xl text-white">Duration: {item.time}</p>
              <p className="text-2xl text-white">Description: {item.desc}</p>
              <p className="text-2xl text-white">Starring: {item.starring}</p>
              <p className="text-2xl text-white">Genres: {item.genres}</p>
              <p className="text-2xl text-white">Tags: {item.tags}</p>
              <p className="text-2xl text-white">Date: {item.date}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      {/* <div className="navigation-buttons">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div> */}
    </div>
  );
}

export default Homes;
