import HTML5 from '../assets/img/HTML5.png';
import CSS3 from '../assets/img/CSS3.png';
import JS5 from '../assets/img/javascript-r.svg';
import ReactLogo from '../assets/img/react-2.svg';
import EX from '../assets/img/express-109.svg';
import NodeJS from '../assets/img/nodejs-1.svg';
import Tailscale from '../assets/img/Tailscale.png';
import Render from '../assets/img/Render.png';
import Firebase from '../assets/img/firebase-2.svg';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
// import arrow1 from '../assets/img/arrow1.svg';
// import arrow2 from '../assets/img/arrow2.svg';

export const TechStack = () => {
    const [images, setImages] = useState([
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
    <div className="techstack">
      <h1 className="techstack">
        Image Gallery
      </h1>
      
      {/* Grid container */}
      <div className="techstack">
        {images.map((image) => (
          <div
            key={image.id}
            className="techstack"
            onClick={() => handleImageClick(image)}
          >
            {!imageErrors.has(image.id) ? (
              <>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="techstack"
                  onError={() => handleImageError(image.id)}
                  loading="lazy"
                />
                <div className="techstack">
                  <h3 className="techstack">
                    {image.title}
                  </h3>
                </div>
              </>
            ) : (
              <div className="techstack">
                <div className="techstack">
                  <div className="techstack">📷</div>
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
          className="item"
          onClick={closeModal}
        >
          <div className="techstack">
            <button
              onClick={closeModal}
              className="techstack"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="techstack"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="techstack">
              <h3 className="techstack">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};