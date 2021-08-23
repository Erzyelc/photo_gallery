import React, { useState } from "react";
import "./styles.css";
import city from "./assets/image1.jpeg";
import phillies from "./assets/image2.jpeg";
import snowy from "./assets/image3.jpeg";
import musuem from "./assets/image4.jpeg";
import mountain from "./assets/image5.jpeg";

const images = [city, phillies, snowy, musuem, mountain];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    );
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };
  return (
    <>
      <section>
        <header>
          <h1>Ryan Carpenter</h1>
          <h2>A Photo Gallery</h2>
        </header>
        <figure>
          {numLoaded < images.length && (
            <Loading calculatedWidth={(numLoaded / images.length) * 100} />
          )}
          <figcaption>
            {currentImage + 1} / {images.length}
          </figcaption>
          {images.map((src, index) => (
            <img
              alt=""
              onClick={handleClick}
              onLoad={handleImageLoad}
              key={src}
              src={src}
              style={{ opacity: currentImage === index ? 1 : 0 }}
            />
          ))}
        </figure>
      </section>
    </>
  );
};

export default App;
