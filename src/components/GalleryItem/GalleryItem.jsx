import { useState } from "react";
import './GalleryItem.css'

function GalleryItem({ item, addLike, deleteItem }) {
  const [selected, setSelected] = useState(true);
  console.log(item);
  return (
    <div>
      <div className="imagebox">
      <div
        className="imagebox"
        key={item.id}
        onClick={() => setSelected(!selected)}
      >
        {selected ? (
          <img src={item.path}></img>
        ) : (
            <div className="flipBox">{item.description}</div>
        )}
      </div>
      </div>
      <button className="loveIt" onClick={ () => addLike(item.id, item.likes)}>love it!</button>
      <button className="deleteIt" onClick={ () => deleteItem(item.id)}>delete it!</button>
      <p>{item.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem;
