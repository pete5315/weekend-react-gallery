import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'


function GalleryList(props) {
  console.log(props);
  return (
    <div>
      <h2>My Gallery</h2>
      <div className="galleryWrapper">
        {props.galleryList.map((item) => (
                    <GalleryItem item={item} key={item.id} addLike={props.addLike} />
          ))}
      </div>
    </div>
  );
}

export default GalleryList;
