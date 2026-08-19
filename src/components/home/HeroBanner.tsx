import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  BannerSection, 
  Track, 
  Slide, 
  Copy, 
  Title, 
  Desc, 
  Cta, 
  Indicator, 
  Dot 
} from './HeroBanner.styles';

const slides = [
  {
    image: "/img/banner-hero-1.jpg",
    title: "BYREDO\nHAND CARE",
    desc: "섬세한 향으로 완성하는\n나만의 순간"
  },
  {
    image: "/img/banner-hero-2.jpg",
    title: "BYREDO\nHAND CARE",
    desc: "나만의 특별한 향기를 찾아보세요"
  },
  {
    image: "/img/banner-hero-3.jpg",
    title: "BYREDO\nHAND CARE",
    desc: "은은하게 퍼지는 매력적인 머스크"
  }
];

const HeroBanner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isHovered]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <BannerSection 
      id="hero-banner" 
      aria-label="메인 비주얼 배너"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Track id="hero-track">
        {slides.map((slide, i) => (
          <Slide key={i} isActive={activeIndex === i}>
            <img src={slide.image} alt={`hero banner ${i + 1}`} />
            <Copy>
              <Title dangerouslySetInnerHTML={{ __html: slide.title.replace(/\n/g, '<br>') }} />
              <Desc dangerouslySetInnerHTML={{ __html: slide.desc.replace(/\n/g, '<br>') }} />
              <Cta as={Link} to="/products" className="trigger-product-list">SHOP NOW →</Cta>
            </Copy>
          </Slide>
        ))}
      </Track>
      <Indicator id="hero-indicator" aria-live="polite">
        {slides.map((_, i) => (
          <Dot 
            key={i} 
            isActive={activeIndex === i} 
            onClick={() => handleDotClick(i)} 
            aria-label={`${i + 1}번째 배너 보기`} 
          />
        ))}
      </Indicator>
    </BannerSection>
  );
};

export default HeroBanner;
