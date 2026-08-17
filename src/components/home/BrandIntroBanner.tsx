import React from 'react';
import { BannerContainer, TextContent, LinkText, ImageWrapper } from './BrandIntroBanner.styles';

const BrandIntroBanner: React.FC = () => {
  return (
    <BannerContainer id="brand-intro-banner" aria-label="브랜드 소개 배너">
      <TextContent>
        <h2>
          BYREDO<br />HAND CREAM
        </h2>
        <p>기억에 남는 향, 감각적인 경험 바이레도 핸드크림을 만나보세요.</p>
        <LinkText href="#" className="trigger-about">
          브랜드 소개 보기 →
        </LinkText>
      </TextContent>
      <ImageWrapper>
        <img src="/org/img/banner-brand-intro.jpg" alt="brand intro banner" />
      </ImageWrapper>
    </BannerContainer>
  );
};

export default BrandIntroBanner;
