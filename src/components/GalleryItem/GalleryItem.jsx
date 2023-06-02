//import method so we have a variable that can be updated.
import { useState } from "react";
//import the local styling so the grid items have good spacing and sizing
import './GalleryItem.css'
//this function is invoked by GalleryList.jsx
function GalleryItem({ item, addLike }) { //props includes the item that is being added and the addLike function
  const [selected, setSelected] = useState(true); //boolean variable that will track whether an item has been 
  //clicked an even or odd number of times so it can show the picture or the text
  return (
    <div>
      <div
        className="imagebox"
        key={item.id}
        //this checks if the box has been clicked and flips the image to text or vice versa if so
        onClick={() => setSelected(!selected)}
      >
        {/* ternary function that flips the content between image and text */}
        {selected ? (
          // if selected is true, show the image
          <img src={item.path}></img> 
        ) : (
          // if selected is false, show the text
          <div>
            <div className="flipBox">{item.description}</div>
          </div>
        )}
        //
      </div>
      {/* like button that should initiate a put request to update likes when pressed */}
      <button className="loveIt" onClick={ () => addLike(item.id, item.likes)}>love it!</button>
      {/* display the number of likes for the image */}
      <p>{item.likes} people love this!</p>
    </div>
  );
}
// export the function so GalleryList.jsx has something to call
export default GalleryItem;
