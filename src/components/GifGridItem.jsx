import React from "react";
import PropTypes from "prop-types";

function GifGridItem({ img }) {
  const { title, url } = img;

  return (
    <div className="card animate__animated animate__fadeIn">
      <p> {title} </p>
      <img src={url} alt={title} />
    </div>
  );
}

GifGridItem.propTypes = {};

export default GifGridItem;
