import React, { useState } from 'react';

function Tour({ id, removeTour, image, info, name, price }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info ">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          className="info-btn"
          style={{ marginBottom: '10px' }}
          type="button"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'show less' : 'read more'}
        </button>
        <button
          className="btn delete-btn btn-block"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
