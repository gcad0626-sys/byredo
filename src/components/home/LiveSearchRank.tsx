import React from 'react';
import { Section, Title, Scroller, Pill, Num, Keyword, Trend } from './LiveSearchRank.styles';

const rankData = [
  { num: 1, keyword: '블랑쉬', trend: '↑' },
  { num: 2, keyword: '발 다프리크', trend: '↑' },
  { num: 3, keyword: '로즈 오브 노…', trend: '↑' }
];

const LiveSearchRank: React.FC = () => {
  return (
    <Section id="live-search-rank" aria-label="실시간 검색 순위">
      <Title>실시간 검색 순위</Title>
      <Scroller>
        {rankData.map((item, index) => (
          <Pill href="#" key={index}>
            <Num>{item.num}</Num>
            <Keyword>{item.keyword}</Keyword>
            <Trend>{item.trend}</Trend>
          </Pill>
        ))}
      </Scroller>
    </Section>
  );
};

export default LiveSearchRank;
