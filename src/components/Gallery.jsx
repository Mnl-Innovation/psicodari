import React from "react";

const Gallery = ({ images = [] }) => {
  if (!images.length) return null;

  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={src}
              alt={`obra-${i}`}
              className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
