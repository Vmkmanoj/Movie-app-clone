import React, { useState, useEffect } from "react";
import "../homes/homes.css"; // Ensure your CSS file is linked correctly
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons"; // Import the desired icon

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
    const intervalId = setInterval(nextImage, 3000); 
    return () => clearInterval(intervalId);
  }, [homeData.length]);

  return (
    <div className="homes-container">
      <div className="slideshow-container">
        {homeData.map((item, index) => (
          <div key={item.id} className={`slideshow-item ${index === currentIndex ? 'active' : ''}`}>
            <img
              src={item.cover}
              alt={item.name}
              className="slideshow-image grow"
            />
            <div className="item-details">
              <h2 className="text-7xl text-white heading">{item.name}</h2>
              <div className="flex ml-10 mt-10 gap-10">
                <p className="text-2xl text-white">Rating: {item.rating}</p>
                <p className="text-2xl text-white">{item.time}</p>
              </div>
              <div className="">
                {/* <p className="text-2xl text-white">{item.desc}</p> */}
              </div>
              <div className="rating">
                <p className="text-2xl text-white">Starring: {item.starring}</p>
                <p className="text-2xl text-white">Genres: {item.genres}</p>
                <p className="text-2xl text-white">Tags: {item.tags}</p>
                <p className="text-2xl text-white">Date: {item.date}</p>
              </div>
            </div>
          </div>
        ))}
       
      </div>
      <FontAwesomeIcon icon={faPlay} className="play-icon"/> 
    </div>
  );
}

export default Homes;
