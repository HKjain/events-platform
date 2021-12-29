import React from 'react';

import Card from '../ui/Card';

function Carousel({ events, type }) {
  return (
    <div className="flex bg-white flex-col mx-8 my-8 shadow-xl rounded-2xl h-96">
      <div>
        <h1 className="pt-5 pb-1 underline underline-offset-8 decoration-4 text-indigo-700 tracking-widest text-center font-montserrat uppercase">
          {type}
        </h1>
      </div>
      <div className="flex-1 m-2 carousel rounded-md overflow-y-auto pt-3 pb-3 space-x-8 carousel-center">
        {events.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
