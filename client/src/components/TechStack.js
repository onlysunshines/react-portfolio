import HTML5 from '../assets/img/HTML5.png';
import CSS3 from '../assets/img/CSS3.png';
import JS5 from '../assets/img/javascript-r.svg';
import ReactLogo from '../assets/img/react-2.svg';
import EX from '../assets/img/express-109.svg';
import NodeJS from '../assets/img/nodejs-1.svg';
import Tailscale from '../assets/img/Tailscale.png';
import Render from '../assets/img/Render.png';
import Firebase from '../assets/img/firebase-2.svg';
import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
// import arrow1 from '../assets/img/arrow1.svg';
// import arrow2 from '../assets/img/arrow2.svg';

export const TechStack = () => {
    const techArray = useState([
        {
        id: 1,
        src: HTML5,
        alt: "HTML Logo",
        title: "Hypertext Markup Language Logo"
        },
        {
        id: 2,
        src: CSS3,
        alt: "CSS Logo",
        title: "Cascading Style Sheets Logo"
        },
        {
        id: 3,
        src: JS5,
        alt: "JS5 Logo",
        title: "JavaScript 5 Logo"
        },
        {
        id: 4,
        src: ReactLogo,
        alt: "React Logo",
        title: "React Logo"
        },
        {
        id: 5,
        src: EX,
        alt: "Express Logo",
        title: "Express Framework Logo"
        },
        {
        id: 6,
        src: NodeJS,
        alt: "NodeJS Logo",
        title: "NodeJS Logo"
        },
        {
        id: 7,
        src: Tailscale,
        alt: "Tailscale Logo",
        title: "Tailscale Logo"
        },
        {
        id: 8,
        src: Render,
        alt: "Render Logo",
        title: "Render Logo"
        },
        {
        id: 9,
        src: Firebase,
        alt: "Firebase Logo",
        title: "Firebase Logo"
        }
    ]);

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageErrors, setImageErrors] = useState(new Set());

    const handleImageError = (imageId) => {
        setImageErrors(prev => new Set([...prev, imageId]));
    };

    const handleImageClick = (image) => {
        setSelectedImage(Image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    }

    return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Image Gallery
      </h1>
      
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            onClick={() => handleImageClick(image)}
          >
            {!imageErrors.has(image.id) ? (
              <>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={() => handleImageError(image.id)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h3>
                </div>
              </>
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📷</div>
                  <p>Image not available</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-semibold bg-black bg-opacity-50 rounded px-4 py-2 inline-block">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};