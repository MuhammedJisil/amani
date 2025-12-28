import React, { useState, useEffect, useRef } from 'react';
import ScrollExpandMedia from './components/ScrollExpandMedia.jsx';
import AboutSection from './components/AboutSection.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import SlideOutMenu from './components/SlideOutMenu.jsx';
import BottomNav from './components/BottomNav.jsx';
import ReleasesSection from './components/ReleasesSection.jsx';
import ContactPage from './components/ContactPage.jsx';
import Loader from './components/Loader.jsx';
// Styles are handled by index.css

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isHomeSection, setIsHomeSection] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const releasesRef = useRef(null);
  const contactRef = useRef(null);

  // Handle asset loading
  useEffect(() => {
    const imagesToLoad = [
      '/aattam.png',
      '/ab1.jpg',
      '/ab2.jpg',
      '/ab3.jpg',
      '/ab4.jpg',
      '/ab5.jpg',
      '/ab6.jpg',
      '/ab7.jpg',
      '/amazon_music.png',
      '/background1.jpg',
      '/bg.jpg',
      '/chathi.png',
      '/fucknahidenge.png',
      '/hero-image.jpg',
      '/hero-image0.jpg',
      '/jjj.png',
      '/jio.png',
      '/kochikku_parakk.png',
      '/logo.png',
      '/maranno.png',
      '/paisa.png',
      '/pirakiladi.png',
      '/starterpack.png',
      '/SynByte.png',
      '/thirichariv.png',
      '/vesenam.png',
    ];

    let loadedCount = 0;
    const totalAssets = imagesToLoad.length;

    // Function to update progress
    const updateProgress = () => {
      loadedCount++;
      const progress = (loadedCount / totalAssets) * 100;
      setLoadingProgress(progress);

      // If all assets loaded, hide loader after a short delay
      if (loadedCount === totalAssets) {
        setTimeout(() => {
          setLoading(false);
        }, 500); // Small delay for smooth transition
      }
    };

    // Preload all images
    const imagePromises = imagesToLoad.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          updateProgress();
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          updateProgress(); // Continue even if image fails
          resolve();
        };
        img.src = src;
      });
    });

    // Also ensure minimum loading time of 1 second for UX
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 1000));

    // Wait for both all images AND minimum time
    Promise.all([...imagePromises, minLoadTime]).then(() => {
      // This ensures we've waited for everything
      if (loadedCount === totalAssets) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    });

    // Fallback: force hide loader after 10 seconds regardless
    const fallbackTimer = setTimeout(() => {
      console.warn('Loading timeout - forcing content display');
      setLoading(false);
    }, 10000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  // Track scroll position for logo animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Check if we're in home section
      if (homeRef.current) {
        const homeHeight = homeRef.current.offsetHeight;
        setIsHomeSection(currentScrollY < homeHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return; // Don't update during programmatic scroll

      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'releases', ref: releasesRef },
        { id: 'contact', ref: contactRef }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const handleNavigate = (sectionId) => {
    setIsScrolling(true);
    setActiveSection(sectionId);

    const refs = {
      home: homeRef,
      about: aboutRef,
      releases: releasesRef,
      contact: contactRef
    };

    const targetRef = refs[sectionId];

    if (targetRef?.current) {
      const targetPosition = targetRef.current.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    }
  };

  // Calculate logo size based on scroll position (for large screens)
  const getLogoSize = () => {
    const maxSize = 120; // 120px when at top
    const minSize = 60;  // 60px when scrolled
    const scrollRange = 300; // Pixels to scroll before reaching min size

    const size = Math.max(
      minSize,
      maxSize - (scrollY / scrollRange) * (maxSize - minSize)
    );

    return size;
  };

  const logoSize = getLogoSize();

  // Show loader while loading
  if (loading) {
    return <Loader progress={loadingProgress} />;
  }

  return (
    <div className="App min-h-screen relative">
      {/* Google Fonts Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        `}
      </style>

      {/* Global background image for entire page */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/70 via-black/80 to-black/80"></div>
      </div>

      {/* All content on top of background */}
      <div className="relative z-10">
        <CustomCursor />
        <SlideOutMenu />

        {/* Fixed Logo - Only visible on large screens and in home section on mobile */}
        {(isHomeSection || window.innerWidth >= 1024) && (
          <div
            className={`fixed top-6 right-6 z-50 transition-all duration-300 ease-out
            ${isHomeSection ? 'block' : 'hidden lg:block'}`}
            style={{
              transform: window.innerWidth >= 1024 ? `scale(${logoSize / 60})` : 'scale(1)'
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 w-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
              }}
            />
          </div>
        )}

        {/* Home Section */}
        <div ref={homeRef}>
          <ScrollExpandMedia
            mediaType="image"
            mediaSrc="/hero-image.jpg"
            bgImageSrc="/hero-image0.jpg"
            title="AMANI KL10"

            textBlend={false}
            sectionId="home"
          >
          </ScrollExpandMedia>
        </div>

        <div ref={aboutRef}>
          <AboutSection />
        </div>

        <div ref={releasesRef}>
          <ReleasesSection />
        </div>

        <div ref={contactRef}>
          <ContactPage />
        </div>

        <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default App;