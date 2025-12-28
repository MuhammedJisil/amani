import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
  sectionId = 'home'
}) => {
  const containerRef = useRef(null);
  const [isMobileState, setIsMobileState] = useState(false);

  // Use Framer Motion's useScroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mobile check for responsive values
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Animation Transforms
  // Map scroll progress (0 to 1) to animation values
  // We expand fully by 80% of the scroll container to leave a little buffer at the end
  const expandRange = [0, 0.8];

  const widthBase = 300;
  const widthExpanded = isMobileState ? 950 : 1550; // Approximations based on previous logic
  const mediaWidth = useTransform(scrollYProgress, expandRange, [widthBase, widthExpanded]);

  const heightBase = 400;
  const heightExpanded = isMobileState ? 600 : 800; // Approximations
  const mediaHeight = useTransform(scrollYProgress, expandRange, [heightBase, heightExpanded]);

  const translateVal = isMobileState ? 120 : 150;
  const textLeftX = useTransform(scrollYProgress, expandRange, [0, -translateVal]);
  const textRightX = useTransform(scrollYProgress, expandRange, [0, translateVal]);

  // Opacity transforms
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, expandRange, [0.7, 0.3]);
  const contentOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);


  // Text Splitting
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={containerRef}
      id={sectionId}
      className='relative w-full'
      style={{ height: '200vh' }} // Tall container to creating scrolling space
    >
      {/* Sticky Inner Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Background Image (fades out) */}
        <motion.div
          className='absolute inset-0 z-0 h-full'
          style={{ opacity: bgOpacity }}
        >
          <img
            src={bgImageSrc}
            alt='Background'
            className='w-screen h-screen object-cover'
            style={{ objectPosition: 'center' }}
          />
          <div className='absolute inset-0 bg-black/10' />
        </motion.div>

        {/* Main Content Layer */}
        <div className='container mx-auto flex flex-col items-center justify-center relative z-10 h-full'>

          {/* Expanded Media Container */}
          <motion.div
            className='relative z-0 rounded-2xl overflow-hidden'
            style={{
              width: mediaWidth,
              height: mediaHeight,
              maxWidth: '95vw',
              maxHeight: '85vh',
              boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
            }}
          >
            {mediaType === 'video' ? (
              mediaSrc.includes('youtube.com') ? (
                <div className='relative w-full h-full pointer-events-none'>
                  <iframe
                    width='100%'
                    height='100%'
                    src={
                      mediaSrc.includes('embed')
                        ? mediaSrc +
                        (mediaSrc.includes('?') ? '&' : '?') +
                        'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                        : mediaSrc.replace('watch?v=', 'embed/') +
                        '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                        mediaSrc.split('v=')[1]
                    }
                    className='w-full h-full rounded-xl'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                  <motion.div
                    className='absolute inset-0 bg-black/30 rounded-xl'
                    style={{ opacity: overlayOpacity }}
                  />
                </div>
              ) : (
                <div className='relative w-full h-full pointer-events-none'>
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                    className='w-full h-full object-cover rounded-xl'
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                  />
                  <motion.div
                    className='absolute inset-0 bg-black/30 rounded-xl'
                    style={{ opacity: overlayOpacity }}
                  />
                </div>
              )
            ) : (
              <div className='relative w-full h-full'>
                <img
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  className='w-full h-full object-cover rounded-xl'
                />
                <motion.div
                  className='absolute inset-0 bg-black/50 rounded-xl'
                  style={{ opacity: overlayOpacity }}
                />
              </div>
            )}

            {/* Info Text Inside Media */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10 w-full'>
              {date && (
                <motion.p
                  className='text-2xl text-blue-200 mb-2'
                  style={{
                    x: textLeftX,
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  {date}
                </motion.p>
              )}
              {scrollToExpand && (
                <motion.p
                  className='text-blue-200 font-medium text-center'
                  style={{
                    x: textRightX,
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  {scrollToExpand}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Main Title Outside - Scales/Moves with scroll */}
          <div
            className={`flex items-center justify-center text-center gap-4 w-full absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'}`}
          >
            <motion.h2
              className='text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200'
              style={{
                x: textLeftX,
                fontFamily: "'Anton', sans-serif"
              }}
            >
              {firstWord}
            </motion.h2>
            <motion.h2
              className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-200'
              style={{
                x: textRightX,
                fontFamily: "'Anton', sans-serif"
              }}
            >
              {restOfTitle}
            </motion.h2>
          </div>

          {/* Children Content (if any) */}
          <motion.section
            className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20 absolute top-full mt-20'
            style={{ opacity: contentOpacity }}
          >
            {children}
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;