import React from 'react'
import ImageGallery from "react-image-gallery";

const images = [
    {
      original: "images/gallery01.jpg",
      thumbnail: "images/gallery01.jpg",
    },
    {
      original: "images/gallery02.jpg",
      thumbnail: "images/gallery02.jpg",
    },
    {
      original: "images/gallery03.jpg",
      thumbnail: "images/gallery03.jpg",
    },
    {
      original: "images/gallery04.jpg",
      thumbnail: "images/gallery04.jpg",
    },
    {
      original: "images/gallery05.jpg",
      thumbnail: "images/gallery05.jpg",
    },
    {
      original: "images/gallery06.jpg",
      thumbnail: "images/gallery06.jpg",
    },
  ];

const ImageSlider = () => {    
  return (
   <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showNav={false} />
  )
}

export default ImageSlider