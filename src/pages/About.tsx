import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  AboutMain, AboutHero, AboutContent, AboutTitle, AboutText, AboutSignature, AboutImage 
} from './About.styles';

const About: React.FC = () => {
  return (
    <AppLayout>
      <AppHeader />
      <AboutMain id="about-main">
        <AboutHero>
          <img src="/org/img/about-hero.jpg" alt="Ben Gorham" />
        </AboutHero>
        
        <AboutContent>
          <AboutTitle>BYREDO</AboutTitle>
          <AboutText>
            바이레도(BYREDO)는 2006년 스톡홀름에서 벤 고햄(Ben Gorham)에 의해 설립된 유러피안 럭셔리 브랜드입니다.<br/><br/>
            기억과 감정을 제품과 경험으로 치환하는 것에 초점을 맞추며, 새로운 접근 방식을 통해 럭셔리의 세계를 재창조하고 있습니다.<br/><br/>
            최고급 소재와 하이엔드 디자인의 만남을 통해 창조되는 바이레도의 컬렉션은 향수, 메이크업, 홈 프래그런스, 레더 굿즈 및 액세서리로 구성되어 있습니다.
          </AboutText>
          <AboutSignature>Ben Gorham, Founder</AboutSignature>
        </AboutContent>
        
        <AboutImage>
          <img src="/org/img/about-2.jpg" alt="Byredo Store" />
        </AboutImage>
        <AboutImage>
          <img src="/org/img/about-3.jpg" alt="Byredo Product" />
        </AboutImage>
      </AboutMain>
    </AppLayout>
  );
};

export default About;
