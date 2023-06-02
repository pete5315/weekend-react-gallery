import React from "react";
//import styling for this component
import "./App.css";
//import methods
import axios from "axios";
import { useState, useEffect } from "react";
//import the gallery list component which will hold
import GalleryList from "../GalleryList/GalleryList";

//main app
function App() {
  //establish a variable and how to update it in react
  let [gallery, setGallery] = useState([]);
  //on load, we want to get the gallery
  useEffect(() => {
    getGallery();
  }, []);
  //function to get the gallery with an axios call
  const getGallery = () => {
    axios
      .get("/gallery") //url corresponds with server/router
      .then((response) => {
        //update the gallery variable with the information from the server
        setGallery(response.data);
      })
      .catch((err) => {
        //error catching
        alert("error getting gallery");
        console.log(err);
      });
  };

  //function to add like to one of the pictures
  const addLike = (id, data) => {
    //will need to send an id and the current number of likes
    data++; //increase the number of likes by 1 before sending
    console.log(data);
    axios
      .put(`/gallery/like/${id}`, {data}) //id tells the server what data to update, data has the new number of likes
      .then((response) => {
        getGallery(); //update the DOM after we update the number of likes on the server
      })
      .catch((err) => {
        //error catching
        alert("error sending like");
        console.log(err);
      });
  };
  //return the information that will be added to the DOM
  return (
    //classnames included to style the components that live in this file
    <div className="App">
      {/* the header could be separated into a component but it is very small bit of code. */}
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* call the GalleryList component so it can get all the images */}
      <GalleryList galleryList={gallery} addLike={addLike} />
    </div>
  );
}
//export it so App.jsx has something to call
export default App;
