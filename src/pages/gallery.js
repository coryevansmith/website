import {
  Box,
  ImageList,
  ImageListItem,
  CircularProgress,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import imageList from "../handlers/galleryHandler";

function Gallery() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const imagePromises = imageList.map((item) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `${item.img}`;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  const handleClickOpen = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
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
      {loading ? (
        <CircularProgress />
      ) : (
        <ImageList sx={{ width: "80%" }}>
          {imageList.map((item, index) => (
            <ImageListItem
              key={item.img}
              onClick={() => handleClickOpen(index)}
            >
              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{ maxHeight: "30rem" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              top: "50%",
              left: "1rem",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
            }}
          >
            <ArrowBack />
          </IconButton>
          <img
            src={imageList[selectedImageIndex]?.img}
            alt={imageList[selectedImageIndex]?.title}
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
            }}
          >
            <ArrowForward />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Gallery;
