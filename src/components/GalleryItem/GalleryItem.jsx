import { useState } from "react";
import './GalleryItem.css'

function GalleryItem({ item }) {
  const [selected, setSelected] = useState(true);
  console.log(item);
  return (
    <div>
      <div
        className="imagebox"
        key={item.id}
        onClick={() => setSelected(!selected)}
      >
        {selected ? (
          <img src={item.path}></img>
        ) : (
          <div>
            <div className="flipBox">{item.description}</div>
          </div>
        )}
      </div>
      <button className="loveIt">love it!</button>
      <p>{item.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem;
