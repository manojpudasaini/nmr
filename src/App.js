import React from 'react';
import Header from "./components/Header/header";
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel/carousel'
import Movies from "./components/movies/index";

function App() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Movies />

    </div>
  );
}

export default App;
