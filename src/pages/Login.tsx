import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  AuthMain, AuthTitle, AuthFormRow, AuthBtn, AuthDivider, AuthLinks, AuthLink, AuthLinksBottom, AuthText
} from './Auth.styles';

const Toast = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: calc(var(--tabbar-h) + 20px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 13px;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1000;
  white-space: nowrap;
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [modalMode, setModalMode] = useState<'select' | 'new'>('select');
  const [provider, setProvider] = useState<'kakao' | 'google' | 'apple' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const handleLoginSuccess = (providerName: string, userName: string = '인영', userEmail: string = 'user@example.com') => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loginProvider', providerName);
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    setIsLoggedIn(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      window.location.href = '/mypage';
    }, 1500);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginProvider');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
  };

  const handleSocialClick = (p: 'kakao' | 'google' | 'apple') => {
    setProvider(p);
    setModalMode('select');
    setShowAccountModal(true);
  };

  const handleAccountSelect = (email: string) => {
    if (email === 'new') {
      setModalMode('new');
    } else {
      setShowAccountModal(false);
      const name = email === 'user1@example.com' ? '김바이레도' : '이향수';
      handleLoginSuccess(provider || 'email', name, email);
    }
  };

  const handleNewAccountLogin = () => {
    setShowAccountModal(false);
    handleLoginSuccess(provider || 'email', '신규유저', 'new@example.com');
  };

  if (isLoggedIn) {
    return (
      <AppLayout>
        <AppHeader />
        <AuthMain id="login-main" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <AuthTitle>LOGOUT</AuthTitle>
          <p style={{ textAlign: 'center', marginBottom: '32px', color: '#666', fontSize: '14px' }}>
            환영합니다!<br/>현재 로그인되어 있습니다.
          </p>
          <AuthBtn variant="submit" onClick={handleLogout} style={{ marginTop: 0 }}>로그아웃</AuthBtn>
        </AuthMain>
        <Toast show={showToast}>환영합니다! 로그인 되었습니다.</Toast>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <AppHeader />
      <AuthMain id="login-main">
        <AuthTitle>LOGIN</AuthTitle>
        
        <AuthFormRow>
          <label>이메일</label>
          <input type="email" placeholder="이메일 주소를 입력해주세요" />
        </AuthFormRow>
        <AuthFormRow>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력해주세요" />
        </AuthFormRow>
        
        <AuthBtn variant="submit" onClick={() => handleLoginSuccess('email', '일반유저', 'normal@byredo.com')}>로그인</AuthBtn>
        
        <AuthDivider>또는</AuthDivider>
        
        <AuthBtn variant="kakao" onClick={() => handleSocialClick('kakao')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4c-4.97 0-9 3.18-9 7.1 0 2.53 1.62 4.75 4.05 6.03-.13.43-1.02 3.8-.13 3.65.62-.1 3.5-2.31 3.5-2.31.51.08 1.04.13 1.58.13 4.97 0 9-3.18 9-7.1 0-3.92-4.03-7.1-9-7.1z" />
          </svg>
          카카오로 시작하기
        </AuthBtn>
        <AuthBtn variant="google" onClick={() => handleSocialClick('google')}>
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            <path fill="none" d="M0 0h48v48H0z"/>
          </svg>
          구글로 로그인하기
        </AuthBtn>
        <AuthBtn variant="apple" onClick={() => handleSocialClick('apple')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 13.57c-.02-2.12 1.74-3.15 1.82-3.2-1-1.46-2.56-1.65-3.1-1.68-1.32-.13-2.6.78-3.27.78-.68 0-1.74-.75-2.84-.73-1.42.02-2.74.83-3.48 2.1-1.49 2.58-.38 6.4 1.08 8.5 .72 1.03 1.55 2.18 2.66 2.14 1.08-.04 1.48-.68 2.78-.68 1.3 0 1.67.68 2.8.66 1.15-.02 1.88-1.07 2.58-2.1 1.2-1.76 1.69-3.46 1.7-3.56-.02-.02-1.71-.65-1.73-2.23M15.11 6.53c.6-.72 1-1.72.89-2.73-1.02.04-2.2.66-2.82 1.38-.55.63-1.03 1.65-.91 2.65 1.13.09 2.22-.57 2.84-1.3" />
          </svg>
          Apple로 로그인하기
        </AuthBtn>
        
        <AuthLinks>
          <AuthLink href="#">비밀번호를 잊으셨나요?</AuthLink>
          <AuthLinksBottom>
            <AuthText>계정이 없으신가요?</AuthText>
            <AuthLink strong onClick={(e) => { e.preventDefault(); navigate('/signup'); }}>회원가입</AuthLink>
          </AuthLinksBottom>
        </AuthLinks>
      </AuthMain>

      {/* Account Selection Modal Mockup */}
      {showAccountModal && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            background: '#fff', width: '300px', borderRadius: '16px', padding: '24px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)', textAlign: 'center', position: 'relative'
          }}>
            {/* Minimal X button */}
            <button 
              onClick={() => setShowAccountModal(false)}
              style={{
                position: 'absolute', top: '16px', right: '16px', 
                background: 'none', border: 'none', fontSize: '18px', 
                cursor: 'pointer', color: '#999', padding: '4px'
              }}
            >
              ✕
            </button>

            {modalMode === 'select' ? (
              <>
                <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold', color: '#111' }}>
                  {provider === 'kakao' ? '카카오 계정 선택' : provider === 'google' ? 'Google 계정 선택' : 'Apple 계정 선택'}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                  <li 
                    onClick={() => handleAccountSelect('user1@example.com')}
                    style={{ padding: '16px 12px', borderBottom: '1px solid #eee', cursor: 'pointer', fontSize: '15px' }}>
                    <strong style={{ display: 'block', marginBottom: '4px', color: '#333' }}>김바이레도</strong>
                    <span style={{ color: '#777', fontSize: '13px' }}>user1@example.com</span>
                  </li>
                  <li 
                    onClick={() => handleAccountSelect('user2@example.com')}
                    style={{ padding: '16px 12px', borderBottom: '1px solid #eee', cursor: 'pointer', fontSize: '15px' }}>
                    <strong style={{ display: 'block', marginBottom: '4px', color: '#333' }}>이향수</strong>
                    <span style={{ color: '#777', fontSize: '13px' }}>user2@example.com</span>
                  </li>
                  <li 
                    onClick={() => handleAccountSelect('new')}
                    style={{ padding: '16px 12px', cursor: 'pointer', color: '#111', fontWeight: '500', fontSize: '15px' }}>
                    + 다른 계정 사용
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold', color: '#111' }}>
                  다른 계정 로그인
                </h3>
                <div style={{ textAlign: 'left', marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>이메일</label>
                  <input type="email" placeholder="이메일 입력" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '12px' }} />
                  
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '8px' }}>비밀번호</label>
                  <input type="password" placeholder="비밀번호 입력" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <button 
                  onClick={handleNewAccountLogin}
                  style={{ 
                    width: '100%', padding: '14px', 
                    borderRadius: '8px', border: 'none', background: '#222', 
                    color: '#fff', fontWeight: 'bold', cursor: 'pointer' 
                  }}
                >
                  로그인
                </button>
              </>
            )}
          </div>
        </div>
      )}
      
      <Toast show={showToast}>환영합니다! 로그인 되었습니다.</Toast>
    </AppLayout>
  );
};

export default Login;
