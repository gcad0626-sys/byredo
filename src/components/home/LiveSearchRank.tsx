import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section, Title, Scroller, Pill, Num, Keyword, Trend } from './LiveSearchRank.styles';

const initialKeywords = ['블랑쉬', '발 다프리크', '로즈 오브 노맨즈 랜드', '모하비 고스트', '집시 워터'];

const LiveSearchRank: React.FC = () => {
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState(initialKeywords);

  useEffect(() => {
    const timer = setInterval(() => {
      setKeywords(prev => {
        const next = [...prev];
        const first = next.shift();
        if (first) next.push(first);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = (e: React.MouseEvent, keyword: string) => {
    e.preventDefault();
    const idMap: Record<string, number> = {
      '블랑쉬': 3,
      '모하비 고스트': 2,
      '발 다프리크': 4,
      '로즈 오브 노맨즈 랜드': 5,
      '집시 워터': 6
    };
    const id = idMap[keyword] || 1;
    navigate(`/products/${id}`);
  };

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Section id="live-search-rank" aria-label="실시간 검색 순위">
      <Title>실시간 검색 순위</Title>
      <Scroller 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDown ? 'grabbing' : 'grab' }}
      >
        {keywords.slice(0, 3).map((keyword, index) => (
          <Pill 
            href="#" 
            key={keyword} 
            onClick={(e) => {
              // Prevent click if we are dragging
              if (isDown && scrollRef.current && Math.abs(scrollLeft - scrollRef.current.scrollLeft) > 5) {
                e.preventDefault();
                return;
              }
              handleClick(e, keyword);
            }} 
            style={{ transition: 'all 0.3s' }}
          >
            <Num>{index + 1}</Num>
            <Keyword>{keyword.length > 8 ? keyword.substring(0, 8) + '…' : keyword}</Keyword>
            <Trend>↑</Trend>
          </Pill>
        ))}
      </Scroller>
    </Section>
  );
};

export default LiveSearchRank;
