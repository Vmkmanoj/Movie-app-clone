import React from "react";

function Homes(props) {
  const { homeData } = props.ele; // Destructure homeData from props.ele

  return (
    <div>
      <h1 className="absolute">Home Items</h1>
      <ul>
        {homeData.map((item) => (
          <li key={item.id} className="absolute">
            <h2>{item.name}</h2>
            <p>Rating: {item.rating}</p>
            <p>Duration: {item.time}</p>
            <p>Description: {item.desc}</p>
            <p>Starring: {item.starring}</p>
            <p>Genres: {item.genres}</p>
            <p>Tags: {item.tags}</p>
            <p>Date: {item.date}</p>
            <img src={item.cover} alt={item.name} />
            <video controls>
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homes;
