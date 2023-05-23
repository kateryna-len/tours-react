import React from 'react';
import Tour from './Tour';

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>our tour</h2>
        <div className="title-underline "></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour removeTour={removeTour} key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
