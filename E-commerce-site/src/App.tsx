
import Hero from './components/Hero/Hero.tsx'
import About from './components/About/About.tsx'
import data from './data/info-data.tsx'
import GlobalStyle from './styles/GlobalStyle.ts'
import {useState, useEffect} from "react"
// import Navbar from './components/Navbar/Navbar.tsx'

function App() {
const [index, setIndex] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(false);
const dataLen = data.length;

useEffect(() => {
  if (isTransitioning) {
    const timeoutId = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match the duration of the CSS transition

    return () => clearTimeout(timeoutId);
  }
}, [isTransitioning]);

useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      changeImage();
    } else if (event.key === 'ArrowLeft') {
      switchBack();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [index]);

useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      changeImage();
    } else if (event.key === 'ArrowLeft') {
      switchBack();
    }
  };

  const handleSwipe = (event) => {
    const touchStartX = event.touches[0].clientX;
    const touchEndX = event.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
      changeImage(); // Swipe left to navigate to the next image
    }

    if (touchStartX - touchEndX < -50) {
      switchBack(); // Swipe right to navigate to the previous image
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('touchstart', handleSwipe);
  window.addEventListener('touchend', handleSwipe);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('touchstart', handleSwipe);
    window.removeEventListener('touchend', handleSwipe);
  };
}, [index]); 

const changeImage = () => {
  setIsTransitioning(true);
  setIndex((prev) => (prev + 1) % dataLen)
}

const switchBack = () => {
  setIsTransitioning(true);
  setIndex((prev) => (prev - 1 + dataLen) % dataLen )
}




  return (
    <>
      <GlobalStyle />
      {/* <Navbar /> */}
      <Hero 
        key={data[index].id}
        mobileImage={data[index].mobileImage}
        coverImage={data[index].coverImage}
        heading={data[index].heading}
        description={data[index].description}
        handleClick={changeImage}
        switchBack={switchBack}
        isTransitioning={isTransitioning}
      />
      <About />
    </>
  )
}

export default App
