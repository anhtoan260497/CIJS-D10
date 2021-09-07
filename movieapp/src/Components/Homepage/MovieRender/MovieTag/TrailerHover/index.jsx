import React from "react";

function TrailerHover(props) {
  return (
    <div className="trailer">
      {props.id !== undefined ? (
        <iframe
          src={`https://www.youtube.com/embed/${props.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : null}
    </div>
  );
}

export default TrailerHover;
