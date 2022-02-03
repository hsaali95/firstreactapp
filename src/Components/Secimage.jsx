import React from "react";
import image from "../Images/1.jpg";

const ImageSection = () => {
  return (
    <section className="imagesSection">
      <img src={image} height="400px" width="100%" />
    </section>
  );
};
export default ImageSection;
