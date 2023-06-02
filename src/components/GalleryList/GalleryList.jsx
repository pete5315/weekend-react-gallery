//import component that we are iterating over using the map method
import GalleryItem from "../GalleryItem/GalleryItem";
//import the local styling so it shows up as a grid
import "./GalleryList.css";
//this function is invoked by the App.jsx
function GalleryList(props) {
  //props includes the galleryList array and the addLike function
  return (
    <div>
      <h2>My Gallery</h2>
      {/* grid styling applied to galleryWrapper */}
      <div className="galleryWrapper">
        {props.galleryList.map((item) => (
          // the map method will iterate over the galleryList array, adding a GalleryItem component for each element in the array
          <GalleryItem item={item} key={item.id} addLike={props.addLike} />
          // GalleryItem needs a key and to pass down the addLike function and item object
        ))}
      </div>
    </div>
  );
}
//export so App.jsx can call it
export default GalleryList;