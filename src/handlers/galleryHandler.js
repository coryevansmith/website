// src/handlers/galleryHandler.js

const images = require.context(
  "../resources/GalleryPhotos",
  false,
  /\.(png|jpe?g|svg)$/
);

const imageList = images.keys().map((path) => {
  const fileName = path.replace("./", "");
  return {
    img: images(path),
    title: fileName,
  };
});

export default imageList;
