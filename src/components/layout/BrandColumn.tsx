import React, { useState } from 'react';
import { 
  Aside, Inner, Logo, Title, SubCopy, 
  QuizSection, QuizHead, QuizIcon, QuizBtn, 
  DownloadSection, Badges, DecoImage,
  QRCodeOverlay, QRCodeContent
} from './BrandColumn.styles';

import { Link } from 'react-router-dom';

const BrandColumn: React.FC = () => {
  const [activeQR, setActiveQR] = useState<'appstore' | 'googleplay' | null>(null);

  return (
    <Aside id="brand-column" data-scope="desktop-only">
      <Inner>
        <Logo>
          <img src="/img/logo.png" alt="BYREDO logo" />
        </Logo>
        <Title>FIND YOUR SCENT</Title>
        <SubCopy dangerouslySetInnerHTML={{ __html: '나에게 딱 맞는 향의<br>핸드크림을 찾아보세요' }} />

        <QuizSection aria-label="향 취향 퀴즈">
          <QuizHead>
            <QuizIcon>
              <img src="/img/icon-quiz.png" alt="quiz icon" />
            </QuizIcon>
            <h4>향 취향 퀴즈</h4>
          </QuizHead>
          <p dangerouslySetInnerHTML={{ __html: '간단한 질문으로 나의 향 취향을 찾고,<br>나에게 어울리는 핸드크림을 추천받아보세요.' }} />
          <QuizBtn as={Link} to="/quiz" className="trigger-quiz">
            <span>START QUIZ</span>
            <span>→</span>
          </QuizBtn>
          <DecoImage className="brand-column__deco-hand" src="/img/hand.png" alt="" />
        </QuizSection>

        <DownloadSection aria-label="앱 다운로드 배너">
          <h4>GET THE APP</h4>
          <p dangerouslySetInnerHTML={{ __html: '바이레도 앱에서 더 쉽게 만나고<br>새로운 경험을 만나보세요.' }} />
          <Badges>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveQR('appstore'); }}>
              <img src="/img/badge-appstore.png" alt="Download on the App Store" />
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveQR('googleplay'); }}>
              <img src="/img/badge-googleplay.png" alt="Get it on Google Play" />
            </a>
          </Badges>
        </DownloadSection>
      </Inner>

      {activeQR && (
        <QRCodeOverlay onClick={() => setActiveQR(null)}>
          <QRCodeContent onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveQR(null)}>✕</button>
            <h4>{activeQR === 'appstore' ? 'App Store' : 'Google Play'}</h4>
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${
                activeQR === 'appstore' ? 'https://apps.apple.com/app/id123456789' : 'https://play.google.com/store/apps/details?id=com.example'
              }`} 
              alt={`${activeQR} QR Code`} 
            />
            <p>카메라 앱으로 QR 코드를 스캔하세요.</p>
          </QRCodeContent>
        </QRCodeOverlay>
      )}

      <DecoImage className="brand-column__deco--fabric" src="/img/deco-fabric.png" alt="" />
      <DecoImage className="brand-column__deco--bag" src="/img/deco-bag.png" alt="" />
      <DecoImage className="brand-column__watermark" src="/img/brand-watermark.png" alt="" />
    </Aside>
  );
};

export default BrandColumn;
