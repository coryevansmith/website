import {
  Box,
  ImageList,
  ImageListItem,
  CircularProgress,
  Dialog,
  DialogContent,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import imageList from "../handlers/galleryHandler";

function Gallery() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleClickOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

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
            <ImageListItem
              key={item.img}
              onClick={() => handleClickOpen(item.img)}
            >
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
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent>
          <img
            src={selectedImage}
            alt=""
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Gallery;
