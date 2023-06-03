//import the local styling so it shows up as a grid
import "./GalleryPost.css";
import { useState } from "react";
//this function is invoked by the App.jsx
function GalleryPost(props) {
  let [path, setPath] = useState('');
  let [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      path: path,
      description: description
    }
    // setPath('');
    // setDescription('');
    if (data.path&&data.description) {
      props.addItem(data);
    }
    else {
      alert('Please fill in all fields before clicking submit');
    }
  }

  //props includes the galleryList array and the addLike function
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Path</label>
        <input
          type="text"
          placeholder="Path"
          value={path}
          onChange={(evt) => setPath(evt.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <button type="submit">Add Guest</button>
      </form>
    </div>
  );
}
//export so App.jsx can call it
export default GalleryPost;