import React from 'react';

// Release Card Component
const ReleaseCard = ({ title, subtitle, image, links, platforms }) => {
  const platformIcons = {
    spotify: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black group-hover:text-white">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    amazon: (
      <img src="/amazon_music.png" alt="Amazon Music" className="w-full h-full object-contain brightness-0 group-hover:brightness-0 group-hover:invert" />
    ),
    apple: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black group-hover:text-white">
        <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408a10.61 10.61 0 00-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.296-.81a4.817 4.817 0 001.88-2.207c.186-.42.293-.87.37-1.324a9.333 9.333 0 00.14-1.49c.007-.026.01-.052.01-.077V6.124zM7.874 9.727V19.52c0 .27-.028.536-.093.796a2.25 2.25 0 01-.812 1.293c-.478.386-1.024.507-1.625.507-.235 0-.468-.028-.696-.09a2.352 2.352 0 01-1.327-.903 2.287 2.287 0 01-.457-1.376c0-.61.23-1.12.642-1.534.412-.414.915-.642 1.518-.687.346-.026.696-.017 1.043.02V11.24L7.874 9.727zm8.553 3.8v6.267c0 .262-.022.523-.084.776a2.295 2.295 0 01-.8 1.31c-.485.39-1.038.508-1.647.508-.24 0-.476-.025-.707-.088a2.355 2.355 0 01-1.335-.91 2.297 2.297 0 01-.456-1.387c0-.615.232-1.127.65-1.543.418-.416.928-.644 1.54-.687.338-.023.678-.016 1.016.02v-6.118l-7.679 2.013v7.352c0 .27-.028.536-.093.796a2.25 2.25 0 01-.812 1.293c-.478.386-1.024.507-1.625.507-.235 0-.468-.028-.696-.09a2.352 2.352 0 01-1.327-.903 2.287 2.287 0 01-.457-1.376c0-.61.23-1.12.642-1.534.412-.414.915-.642 1.518-.687.346-.026.696-.017 1.043.02V9.727l8.553-2.013v6.813z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black group-hover:text-white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.5l7-4.5-7-4.5v9z" />
      </svg>
    ),
    jiosaavn: (
      <img src="/jio.png" alt="JioSaavn" className="w-full h-full object-contain brightness-0 group-hover:brightness-0 group-hover:invert" />
    )
  };

  return (
    <div className="relative w-full max-w-[350px] h-[200px] bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
      <div className="flex h-full">
        {/* Left side - Image */}
        <div className="w-[45%] h-full relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-[55%] h-full flex flex-col justify-center p-6">
          <h3 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Anton', sans-serif" }}>
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {subtitle}
          </p>

          {/* Icons */}
          <div className="flex gap-3">
            {platforms.map((platform) => (
              <a
                key={platform}
                href={links[platform]}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-600 transition-all group ${platform === 'amazon' || platform === 'jiosaavn' ? 'p-2' : ''
                  }`}
                onClick={(e) => e.stopPropagation()}
              >
                {platformIcons[platform]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Carousel Container
const ReleasesCarousel = ({ releases }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);
  const [isUserInteracting, setIsUserInteracting] = React.useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  React.useEffect(() => {
    if (!isAutoPlaying || isUserInteracting) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % releases.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, releases.length, isUserInteracting]);

  // Resume auto-play after user stops interacting (mobile only)
  React.useEffect(() => {
    if (!isUserInteracting) return;

    const timeout = setTimeout(() => {
      setIsUserInteracting(false);
    }, 3000); // Resume after 3 seconds of no interaction

    return () => clearTimeout(timeout);
  }, [isUserInteracting, currentIndex]);

  const onTouchStart = (e) => {
    setIsUserInteracting(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - go to next
      setCurrentIndex((prev) => (prev + 1) % releases.length);
    }
    if (isRightSwipe) {
      // Swipe right - go to previous
      setCurrentIndex((prev) => (prev - 1 + releases.length) % releases.length);
    }
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + releases.length) % releases.length;

    if (diff === 0) {
      return {
        transform: 'translateX(0%) scale(1.1)',
        zIndex: 30,
        opacity: 1,
      };
    } else if (diff === 1 || diff === -releases.length + 1) {
      return {
        transform: 'translateX(80%) scale(0.85)',
        zIndex: 20,
        opacity: 0.6,
      };
    } else if (diff === releases.length - 1 || diff === -1) {
      return {
        transform: 'translateX(-80%) scale(0.85)',
        zIndex: 20,
        opacity: 0.6,
      };
    } else {
      return {
        transform: 'translateX(0%) scale(0.7)',
        zIndex: 10,
        opacity: 0,
      };
    }
  };

  return (
    <div
      className="relative w-full h-[300px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {releases.map((release, index) => (
        <div
          key={index}
          className="absolute transition-all duration-700 ease-in-out cursor-pointer"
          style={getCardStyle(index)}
          onClick={() => setCurrentIndex(index)}
        >
          <ReleaseCard {...release} />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-0 flex gap-2">
        {releases.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsUserInteracting(true);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-red-500 w-6' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ReleasesSection = React.forwardRef((props, ref) => {
  const releases = [
    {
      title: "Paisa",
      subtitle: "Single",
      image: "/paisa.png",
      platforms: ['spotify', 'amazon', 'apple', 'youtube'],
      links: {
        spotify: "https://open.spotify.com/album/5vYZqTSSolXu4BnssIx3SR?si=nF8uKM16T3aHlGjaFo7qVg",
        amazon: "https://music.amazon.com/albums/B0DVZC8L6H?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_6WuUyW32Wj45P4FKfOEXmem3W",
        apple: "https://music.apple.com/in/album/paisa/1794306830?i=1794306835",
        youtube: "https://music.youtube.com/watch?v=VAZFxMT_rQQ&si=KbKT63GXLU5ATofe"
      }
    },
    {
      title: "Ijj",
      subtitle: "Single",
      image: "/ijj.png",
      platforms: ['spotify', 'amazon', 'apple', 'youtube'],
      links: {
        spotify: "https://open.spotify.com/album/1hT5RP08vVIUXmhee57Luj?si=0-CA8hkMSIeZkqDLPosdiQ",
        amazon: "https://music.amazon.com/albums/B0D7DP1FWF?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_dDy1yztxcZJf2Pm6gBnL4UQlf",
        apple: "https://music.apple.com/in/album/ijj-single/1752735434",
        youtube: "https://music.youtube.com/watch?v=FDkpaCzsmeE&si=IN8exdVSjdlom3Ua"
      }
    },
    {
      title: "Vesenam!",
      subtitle: "Album",
      image: "./vesenam.png",
      platforms: ['spotify', 'amazon', 'apple', 'youtube'],
      links: {
        spotify: "https://open.spotify.com/album/0H0jN7ysFTtRfITcoDiOnD?si=eeEqzrpCR7OplthucFXSWA",
        amazon: "https://music.amazon.com/tracks/B0D9Z9NTBJ?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_a2qrHCAafoaHJgRtqvfTz5R6g",
        apple: "https://music.apple.com/in/album/sabr/1759034899?i=1759034901",
        youtube: "https://music.youtube.com/watch?v=9jq1wPIJOXM&si=pOgyrLuCpKmM-1_m"
      }
    },
    {
      title: "Kochikku Parakk",
      subtitle: "Single",
      image: "/kochikku_parakk.png",
      platforms: ['spotify', 'amazon', 'apple', 'youtube'],
      links: {
        spotify: "https://open.spotify.com/album/1FVIGAq7PVs42sIpHoUiVo?si=bwBZ5bMpSR2VTUNvJbE9IQ",
        amazon: "https://music.amazon.com/tracks/B0DQTKQ36P?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_RySGrJMKLBC1fFSBlhkOVp5Kw",
        apple: "https://music.apple.com/in/album/kochikku-parakk-single/1786051830",
        youtube: "https://music.youtube.com/watch?v=ap5_vp3G7Kc&si=HzDAGb317ANlAoIN"
      }
    },
    {
      title: "Thirichariv",
      subtitle: "Album",
      image: "/thirichariv.png",
      platforms: ['spotify', 'amazon', 'apple', 'jiosaavn'],
      links: {
        spotify: "https://open.spotify.com/album/3yPwe6Db0tvNXG8LhprOqz?si=6ezkFcJgSQqUOerTYQxVkg",
        amazon: "https://music.amazon.com/tracks/B0G496Y1VG?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_Od0CMO3zdgisuipQeCAYLzBqF",
        apple: "https://music.apple.com/in/album/thira-ft-laika-jamal/1856418766?i=1856418768",
        jiosaavn: "https://www.jiosaavn.com/song/thira-ft.-laika-jamal/QRBbezhFDkM"
      }
    },
    {
      title: "Maranno",
      subtitle: "Single",
      image: "/maranno.png",
      platforms: ['spotify', 'amazon', 'apple', 'youtube'],
      links: {
        spotify: "https://open.spotify.com/album/5dvCWA40qNmjSRXwjWjvt0?si=MObOFq49Q2uHa17p1_XpHw",
        amazon: "https://music.amazon.com/tracks/B0CR1WB4YY?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_B57Voam5RyBkSAh6M6ntcJ0e8",
        apple: "https://music.apple.com/in/album/maranno-single/1723216976",
        youtube: "https://music.youtube.com/watch?v=a4UFejezdnk&si=mUar73tDY5Yu1ZvN"
      }
    },
    {
      title: "Pirakiladi",
      subtitle: "Single",
      image: "/pirakiladi.png",
      platforms: ['spotify', 'amazon', 'apple', 'jiosaavn'],
      links: {
        spotify: "https://open.spotify.com/album/2aCdiljk3lBCCidRk9YfBZ?si=aYk6woiRS-mMDYVJ4_7tyQ",
        amazon: "https://music.amazon.com/tracks/B0D9Z9NTBJ?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_a2qrHCAafoaHJgRtqvfTz5R6g",
        apple: "https://music.apple.com/in/album/sabr/1759034899?i=1759034901",
        jiosaavn: "https://www.jiosaavn.com/song/pirakiladi/NTgiREBqU0M"
      }
    },
    {
      title: "Amani Amani",
      subtitle: "EP",
      image: "/starterpack.png",
      platforms: ['spotify', 'amazon', 'youtube', 'jiosaavn'],
      links: {
        spotify: "https://open.spotify.com/album/6hi9qbzvbaqozv6rYK2bCR?si=OSRsVO6STzuSCbPAqrgdjQ",
        amazon: "https://music.amazon.com/tracks/B0CGVYSL57?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_Za3DT8s7aWkBhgqXlQaaCFTRI",
        youtube: "https://music.youtube.com/watch?v=ukBbiFFSH_k&si=GfjKk866k0fm1MIb",
        jiosaavn: "https://www.jiosaavn.com/song/amani-amani/REVTQ0Vge14"
      }
    },
    {
      title: "Chathi",
      subtitle: "Single",
      image: "/chathi.png",
      platforms: ['spotify', 'amazon', 'apple', 'jiosaavn'],
      links: {
        spotify: "https://open.spotify.com/album/0CyndZDyLdIqYlcG1JiwzL?si=WxDoM63jRuOkomFRetRmPw",
        amazon: "https://music.amazon.com/tracks/B0CNKQRHKJ?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_AdjTDaPcASukS10ufOZPyQ4FQ",
        apple: "https://music.apple.com/in/album/chathi-single/1779118178",
        jiosaavn: "https://www.jiosaavn.com/song/chathi/MzxeWhJ6Z38"
      }
    },
    {
      title: "Fuck Nahi Denge",
      subtitle: "Single",
      image: "/fucknahidenge.png",
      platforms: ['spotify', 'amazon', 'apple', 'jiosaavn'],
      links: {
        spotify: "https://open.spotify.com/album/6R33b6qZheUeRm4ltjzmTy?si=cFHxMRxWTuqFO3sOw7UxbQ",
        amazon: "https://music.amazon.com/tracks/B0FQ648V8G?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_IcRU5ne5sEAfSAdURYDPykihC",
        apple: "https://music.apple.com/in/album/fcuk-nahi-denge-single/1838880471",
        jiosaavn: "https://www.jiosaavn.com/song/fcuk-nahi-denge/NiVdBh58ZXE"
      }
    },
    {
      title: "Aattam",
      subtitle: "Single",
      image: "/aattam.png",
      platforms: ['spotify', 'amazon', 'apple', 'jiosaavn'],
      links: {
        spotify: "https://open.spotify.com/album/5pIYKEF5WpAgA1gTgw2Q8c?si=sK7gaqZWRrWPuCmAbVrsGA",
        amazon: "https://music.amazon.com/tracks/B0G86TFKBN?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_RnwZEbHczmFGNvVUlyiXIB41e",
        apple: "https://music.apple.com/in/album/%E0%B4%86%E0%B4%9F-%E0%B4%9F-single/1862323304",
        jiosaavn: "https://www.jiosaavn.com/song/%e0%b4%86%e0%b4%9f%e0%b5%8d%e0%b4%9f%e0%b4%82/PhJZZRF0TlE"
      }
    }
  ];

  return (
    <section
      ref={ref}
      id="releases"
      className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden w-full"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-500 mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
            Releases
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
            Check out my latest releases and projects. Stream now on all major platforms.
          </p>
        </div>

        <ReleasesCarousel releases={releases} />
      </div>
    </section>
  );
});

ReleasesSection.displayName = 'ReleasesSection';

export default ReleasesSection;