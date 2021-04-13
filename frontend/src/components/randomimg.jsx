import React from "react";

const RandomImage = () => {
  const unsplashimg = {
    src: `https://picsum.photos/1600/900`,
    alt: "random unsplash image",
  };

  return (
    <figure>
      <img
        src={unsplashimg.src}
        alt={unsplashimg.alt}
        className="random-image"
      ></img>
      <figcaption>
        A randomly generated image:{" "}
        <a href="http://picsum.photos" target="_blank" rel="noreferrer">
          picsum.photos
        </a>
      </figcaption>
    </figure>
  );
};

export default RandomImage;
