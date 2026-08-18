import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  AboutMain, Section, ImageWrapper, TextContent, Title, SubTitle, Description, YearTitle
} from './About.styles';

const About: React.FC = () => {
  return (
    <AppLayout>
      <AppHeader />
      <AboutMain id="about-main">
        <Section>
          <ImageWrapper>
            <img src="/org/img/pf (1).png" alt="Byredo Perfumes" />
          </ImageWrapper>
          <TextContent>
            <Title>벤 고햄</Title>
            <SubTitle>바이레도(Byredo)는 2006년 스톡홀름에서 벤 고햄(Ben Gorham)이 설립한 브랜드입니다.</SubTitle>
            <Description>
              기억과 감정을 물건과 경험으로 풀어내고자 하는 일상에서 영감을 얻으며, 감각을 중심으로 한 장인정신과 퀄리티를 통해 독창적인 경험을 선사합니다.
            </Description>
            
            <YearTitle>2026</YearTitle>
            
            <Description>
              향수, 메이크업, 홈 프래그런스, 레더 굿즈 및 액세서리로 다채로운 디자이너 패션을 완성하며, 바이레도는 장인정신이 깃든 현대적 레퍼런스로 완벽한 삶이 담긴 라이프 스타일을 구축하여, 새로운 아이디어와 뷰티의 영역을 끊임없이 개척합니다. 벤 고햄은 유러피안 럭셔리, 장인정신, 퀄리티에 대한 깊은 이해를 바탕으로 완성하며, 스칸디나비아의 미니멀리즘과 다양한 예술적 융합 시켜 새로운 경험을 고스란히 담고 있습니다.
            </Description>
          </TextContent>
        </Section>

        <Section>
          <ImageWrapper>
            <img src="/org/img/pf (3).png" alt="Ben Gorham" />
          </ImageWrapper>
          <TextContent>
            <Description>
              바이레도는 일상의 감각을 깨우는 향기를 통해, 감성에 기억을 남기는 하나의 예술적 경험을 마련합니다. 정교하게 설계된 향의 노트들이 당신의 공간과 시간에 깊은 영감을 불어넣습니다.
            </Description>
          </TextContent>
        </Section>

        <Section>
          <ImageWrapper>
            <img src="/org/img/pf (2).png" alt="Byredo Hand Creams" />
          </ImageWrapper>
          <TextContent>
            <Description>
              바이레도의 핸드크림은 브랜드의 상징적인 향기들을 가장 부드럽고 가깝게 경험할 수 있는 오브제입니다. 블랑쉬, 라 튤립, 집시 워터 등 대표적인 향기들이 풍부한 시어버터 성분과 만나 피부에 깊은 보습과 섬세한 잔향을 남깁니다. 감각적인 패키지 디자인은 일상의 소중한 순간을 더욱 특별하게 만들어줍니다.
            </Description>
            <Description>
              현재 바이레도는 전 세계 40개 이상의 국가에서 몰입형 플래그십 스토어와 프리미엄 리테일러 네트워크를 통해 글로벌 커뮤니티와 소통하고 있습니다. 브랜드의 중심에는 여전히 의미를 창조하는 힘으로서의 창의성이 자리하며, 사람들의 삶에 깊이 울림을 주는 시대를 초월한 오브제를 만들어내고 있습니다.
            </Description>
          </TextContent>
        </Section>
      </AboutMain>
    </AppLayout>
  );
};

export default About;
