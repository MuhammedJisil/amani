import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SlideOutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isMobile && isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile, isOpen]);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const socialLinks = [
    {
      name: "Spotify",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
      url: "https://open.spotify.com/artist/0f9QWfK1JSGrmCo2MEXuMr",
    },
    {
      name: "Amazon Music",
      icon: <img src="/amazon_music.png" alt="Amazon Music" className="w-6 h-6 object-contain brightness-0" />,
      url: "https://music.amazon.com/artists/B0B196MGRG/amani-kl10",
    },
    {
      name: "Apple Music",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408a10.61 10.61 0 00-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.296-.81a4.817 4.817 0 001.88-2.207c.186-.42.293-.87.37-1.324a9.333 9.333 0 00.14-1.49c.007-.026.01-.052.01-.077V6.124zM7.874 9.727V19.52c0 .27-.028.536-.093.796a2.25 2.25 0 01-.812 1.293c-.478.386-1.024.507-1.625.507-.235 0-.468-.028-.696-.09a2.352 2.352 0 01-1.327-.903 2.287 2.287 0 01-.457-1.376c0-.61.23-1.12.642-1.534.412-.414.915-.642 1.518-.687.346-.026.696-.017 1.043.02V11.24L7.874 9.727zm8.553 3.8v6.267c0 .262-.022.523-.084.776a2.295 2.295 0 01-.8 1.31c-.485.39-1.038.508-1.647.508-.24 0-.476-.025-.707-.088a2.355 2.355 0 01-1.335-.91 2.297 2.297 0 01-.456-1.387c0-.615.232-1.127.65-1.543.418-.416.928-.644 1.54-.687.338-.023.678-.016 1.016.02v-6.118l-7.679 2.013v7.352c0 .27-.028.536-.093.796a2.25 2.25 0 01-.812 1.293c-.478.386-1.024.507-1.625.507-.235 0-.468-.028-.696-.09a2.352 2.352 0 01-1.327-.903 2.287 2.287 0 01-.457-1.376c0-.61.23-1.12.642-1.534.412-.414.915-.642 1.518-.687.346-.026.696-.017 1.043.02V9.727l8.553-2.013v6.813z"/>
        </svg>
      ),
      url: "https://music.apple.com/us/artist/amani-kl10/1624128004",
    },
    {
      name: "JioSaavn",
      icon: <img src="/jio.png" alt="JioSaavn" className="w-6 h-6 object-contain brightness-0" />,
      url: "https://www.jiosaavn.com/artist/amani-kl10-songs/9ICJBgkg8Dw_",
    },
    {
      name: "YouTube Music",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.5l7-4.5-7-4.5v9z"/>
        </svg>
      ),
      url: "https://music.youtube.com/channel/UCsRd-VxZOkcocuwJWFYmOoQ",
    }
  ];

  return (
    <div 
      ref={menuRef}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
      onClick={handleToggle}
    >
      <motion.div
        className="relative flex items-center"
        initial={false}
        animate={{ width: isOpen ? "auto" : "40px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Menu Container */}
        <div className="relative flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-r-2xl border border-red-600/30 shadow-2xl shadow-red-900/20 overflow-hidden">
          {/* Social Icons */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 py-4 pl-3 pr-1"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-2 rounded-lg text-black hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-red-600/50 group"
                    aria-label={link.name}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      {link.icon}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Arrow Button */}
          <div className="flex items-center justify-center w-[40px] h-full py-4 cursor-pointer">
            <motion.div
              animate={{ x: isOpen ? 0 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/70"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  animate={{ 
                    d: isOpen 
                      ? "M15 19l-7-7 7-7" 
                      : "M9 5l7 7-7 7"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SlideOutMenu;