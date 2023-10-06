import React from 'react';
import styles from '../styles/scrollToTopButton.module.css';
import image from "../images/arrow.webp"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.scrollButton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <img src={image} />
    </div>
  );
};

export default ScrollToTopButton;
