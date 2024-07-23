// src/handlers/galleryHandler.js
import metadata from "../resources/GalleryPhotos/imageMetaData.json";

const images = require.context(
  "../resources/GalleryPhotos",
  false,
  /\.(png|jpe?g|svg)$/
);

const imageList = images.keys().map((path) => {
  const fileName = path.replace("./", "");
  const fileMetadata = metadata[fileName];
  return {
    img: images(path),
    title: fileMetadata?.title || "",
    desc: fileMetadata?.desc || "",
  };
});

export default imageList;
