import React from "react";
import UseFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = UseFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>

      {loading && (
        <p className="clasanimate__animated animate__fadeIn">Loading...</p>
      )}

      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} img={img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
