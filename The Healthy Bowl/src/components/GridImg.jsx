import React, { useEffect, useState } from 'react';
import './GridImg.css';
import homePage1 from '../assets/images_1/homePage1.jpg';
import homePage2 from '../assets/images_1/homePage2.jpg';
import homePage3 from '../assets/images_1/homePage3.jpg';
import homePage4 from '../assets/images_1/homePage4.jpg';
import homePage5 from '../assets/images_1/homePage5.jpg';
import homePage6 from '../assets/images_1/homePage6.jpg';
import homePage7 from '../assets/images_1/homePage7.jpg';
import homePageSouth1 from '../assets/images_1/homePageSouth.jpg';
import homePageSouth2 from '../assets/images_1/homePageSouth2.jpg';
import homePageSouth3 from '../assets/images_1/homePageSouth3.jpg';
import homePageSouth4 from '../assets/images_1/homePageSouth4.jpg';
import homePageSouth5 from '../assets/images_1/homePageSouth5.jpg';
import homePageSouth6 from '../assets/images_1/homePageSouth6.jpg';
import homePageSouth7 from '../assets/images_1/homePageSouth7.jpg';


// Defining image arrays
const image1 = [homePage1, homePageSouth1];
const image2 = [homePage2, homePageSouth2];
const image3 = [homePage3, homePageSouth3];
const image4 = [homePage4, homePageSouth4];
const image5 = [homePage5, homePageSouth5];
const image6 = [homePage6, homePageSouth6];
const image7 = [homePage7, homePageSouth7];


  const GridImg = () => {
    // States for image indices
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentIndex3, setCurrentIndex3] = useState(0);
    const [currentIndex4, setCurrentIndex4] = useState(0);
    const [currentIndex5, setCurrentIndex5] = useState(0);
    const [currentIndex6, setCurrentIndex6] = useState(0);
    const [currentIndex7, setCurrentIndex7] = useState(0);
  
    // State for managing typing effect
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isBlinking, setIsBlinking] = useState(true);
  
    const text = "Discover, Share, and Savor Deliciously Healthy, Quick, Nutritious Recipes!!!";
    const speed = 12; // Typing speed in milliseconds
  
    // Function to update image index periodically
    const updateImageIndex = (currentIndex, setCurrentIndex, imageArray) => {
      setCurrentIndex((currentIndex + 1) % imageArray.length);
    };
  
    // Typing effect using useEffect
    useEffect(() => {
      if (index < text.length) {
        const typingTimeout = setTimeout(() => {
          setTypedText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(typingTimeout);
      }
      // Start blinking after typing is completed
      const blinkInterval = setInterval(() => {
        setIsBlinking((prev) => !prev);
      }, 300);
  
      // Stop blinking after a certain time
      const stopBlinkingTimeout = setTimeout(() => {
        clearInterval(blinkInterval);
        setIsBlinking(false);
      }, 1800);
  
      return () => {
        clearInterval(blinkInterval);
        clearTimeout(stopBlinkingTimeout);
      };
    }, [index]);
  
    // Image change effect using useEffect
    useEffect(() => {
      const interval1 = setInterval(() => updateImageIndex(currentIndex1, setCurrentIndex1, image1), 3000);
      const interval2 = setInterval(() => updateImageIndex(currentIndex2, setCurrentIndex2, image2), 3500);
      const interval3 = setInterval(() => updateImageIndex(currentIndex3, setCurrentIndex3, image3), 4000);
      const interval4 = setInterval(() => updateImageIndex(currentIndex4, setCurrentIndex4, image4), 4500);
      const interval5 = setInterval(() => updateImageIndex(currentIndex5, setCurrentIndex5, image5), 5000);
      const interval6 = setInterval(() => updateImageIndex(currentIndex6, setCurrentIndex6, image6), 5500);
      const interval7 = setInterval(() => updateImageIndex(currentIndex7, setCurrentIndex7, image7), 6000);
  
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
        clearInterval(interval5);
        clearInterval(interval6);
        clearInterval(interval7);
      };
    }, [currentIndex1, currentIndex2, currentIndex3, currentIndex4, currentIndex5, currentIndex6, currentIndex7]);
  
  return (
    <div className="hero mainpage" id="home">
      <div className="grid">
        <div className="item1">
          <img className="grid-image" src={image1[currentIndex1]} alt="img1" />
        </div>
        <div className="item2">
          <img className="grid-image" src={image2[currentIndex2]} alt="img2" />
        </div>
        <div className="item3">
          <img className="grid-image" src={image3[currentIndex3]} alt="img3" />
        </div>
        <div className="item4">
          <img className="grid-image" src={image4[currentIndex4]} alt="img4" />
        </div>
        <div className="item5">
          <img className="grid-image" src={image5[currentIndex5]} alt="img5" />
        </div>
        <div className="item6">
          <img className="grid-image" src={image6[currentIndex6]} alt="img6" />
        </div>
        <div className="item7">
          <img className="grid-image" src={image7[currentIndex7]} alt="img7" />
        </div>
      </div>
      <div className="caption" id="captionid">
      <p style={{ visibility: isBlinking ? 'visible' : 'hidden' }}>{typedText}</p>
      </div>
    </div>
  );
};

export default GridImg;
