import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";

function Gallery() {
  const itemData = [
    // {
    //   img: "https://i.imgur.com/CH4uklD.jpg",
    //   title: "test",
    //   desc: "@test",
    // },
    // {
    //   img: "https://i.imgur.com/kZlyAQh.jpg",
    //   title: "test",
    //   desc: "@test",
    // },
    // {
    //   img: "https://i.imgur.com/7ku0OKE.jpg",
    //   title: "test",
    //   desc: "@test",
    // },
  ];
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
      }}
    >
      <ImageList sx={{ width: "80%" }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.desc}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Gallery;
