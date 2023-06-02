import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
  let [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery()
  }, [])

  const getGallery = () => {
    axios.get('/gallery')
      .then(response => {
        setGallery(response.data)
      })
      .catch(err => {
        alert('error getting gallery');
        console.log(err);
      })
  }

  const addLike = (id, data) => {
    console.log(id);
    data++
    axios.put(`/gallery/like/${id}`, data)
      .then(response => {
        getGallery()
      })
      .catch(err => {
        alert('error sending like');
        console.log(err);
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={gallery} addLike={addLike}/>
      </div>
    );
}

export default App;
