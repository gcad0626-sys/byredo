import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { 
  Container, Title, Subtitle, ProfileCard, Avatar, ProfileName, ProfileEmail, 
  TermsSection, TermAll, TermItem, SubmitBtn, CloseButton, ProfileInfo
} from './SocialSignup.styles';

const SocialSignup: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const provider = searchParams.get('provider') || 'google';
  const emailParam = searchParams.get('email');
  const nameParam = searchParams.get('name');

  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  const [term3, setTerm3] = useState(false);

  const isAllChecked = term1 && term2 && term3;

  const handleToggleAll = () => {
    const nextState = !isAllChecked;
    setTerm1(nextState);
    setTerm2(nextState);
    setTerm3(nextState);
  };

  const isKakao = provider === 'kakao';
  const providerName = isKakao ? '카카오' : '구글';
  
  // URL에서 전달된 정보 사용, 없으면 기본값
  const profileName = nameParam || (isKakao ? '김바이레도' : 'Guest User');
  const profileEmail = emailParam || (isKakao ? 'byredo@kakao.com' : 'user@gmail.com');

  const handleSubmit = () => {
    if (!term1 || !term2) {
      alert('필수 약관에 동의해주세요.');
      return;
    }
    navigate('/');
  };

  return (
    <AppLayout>
      <Container id="social-signup-main">
        <CloseButton onClick={() => navigate(-1)}>✕</CloseButton>
        <Title>반가워요!</Title>
        <Subtitle>{providerName} 계정으로 간편하게 시작합니다.</Subtitle>

        <ProfileCard $provider={provider}>
          <Avatar $provider={provider}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Avatar>
          <ProfileInfo $provider={provider}>
            <ProfileName>{profileName}</ProfileName>
            <ProfileEmail>{profileEmail}</ProfileEmail>
          </ProfileInfo>
        </ProfileCard>

        <TermsSection>
          <TermAll onClick={handleToggleAll}>
            <div className={`check-box ${isAllChecked ? 'checked' : ''}`}>
              {isAllChecked && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <span>약관 전체 동의</span>
          </TermAll>

          <TermItem onClick={() => setTerm1(!term1)}>
            <div className="left">
              <svg className={`check-icon ${term1 ? 'checked' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>[필수] 서비스 이용약관 동의</span>
            </div>
            <div className="arrow">›</div>
          </TermItem>

          <TermItem onClick={() => setTerm2(!term2)}>
            <div className="left">
              <svg className={`check-icon ${term2 ? 'checked' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>[필수] 개인정보 수집 및 이용 동의</span>
            </div>
            <div className="arrow">›</div>
          </TermItem>

          <TermItem onClick={() => setTerm3(!term3)}>
            <div className="left">
              <svg className={`check-icon ${term3 ? 'checked' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>[선택] 마케팅 정보 수신 동의</span>
            </div>
            <div className="arrow">›</div>
          </TermItem>
        </TermsSection>

        <SubmitBtn onClick={handleSubmit}>시작하기</SubmitBtn>
      </Container>
    </AppLayout>
  );
};

export default SocialSignup;
