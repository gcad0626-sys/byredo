import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  AuthMain, AuthTitle, AuthFormRow, AuthBtn, AuthDivider, AuthLinks, AuthLink, AuthLinksBottom, AuthText
} from './Auth.styles';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <AppHeader />
      <AuthMain id="login-main">
        <AuthTitle>LOG IN</AuthTitle>
        
        <AuthFormRow>
          <label>이메일</label>
          <input type="email" placeholder="이메일 주소를 입력해주세요" />
        </AuthFormRow>
        <AuthFormRow>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력해주세요" />
        </AuthFormRow>
        
        <AuthBtn variant="submit" onClick={() => navigate('/mypage')}>로그인</AuthBtn>
        
        <AuthDivider>또는</AuthDivider>
        
        <AuthBtn variant="kakao" onClick={() => navigate('/social-signup?provider=kakao')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4c-4.97 0-9 3.18-9 7.1 0 2.53 1.62 4.75 4.05 6.03-.13.43-1.02 3.8-.13 3.65.62-.1 3.5-2.31 3.5-2.31.51.08 1.04.13 1.58.13 4.97 0 9-3.18 9-7.1 0-3.92-4.03-7.1-9-7.1z" />
          </svg>
          카카오로 시작하기
        </AuthBtn>
        <AuthBtn variant="google" onClick={() => navigate('/social-signup?provider=google')}>
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            <path fill="none" d="M0 0h48v48H0z"/>
          </svg>
          Google로 시작하기
        </AuthBtn>
        
        <AuthLinks>
          <AuthLink href="#">비밀번호를 잊으셨나요?</AuthLink>
          <AuthLinksBottom>
            <AuthText>계정이 없으신가요?</AuthText>
            <AuthLink strong onClick={(e) => { e.preventDefault(); navigate('/signup'); }}>회원가입</AuthLink>
          </AuthLinksBottom>
        </AuthLinks>
      </AuthMain>
    </AppLayout>
  );
};

export default Login;
