import { Box, ImageList, ImageListItem, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import imageList from "../handlers/galleryHandler";

function Gallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagePromises = imageList.map((item) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `${item.img}?w=248&fit=crop&auto=format&dpr=2`;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(34,34,34)",
        background:
          "linear-gradient(13deg, rgba(34,34,34,0.5830707282913166) 1%, rgba(246,246,246,1) 100%)",
        position: "relative",
        width: "100%",
      }}
    >
      {loading && (
        <CircularProgress
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {!loading && (
        <ImageList sx={{ width: "80%" }}>
          {imageList.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              {/* <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.desc}</span>}
                position="below"
              /> */}
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}

export default Gallery;
