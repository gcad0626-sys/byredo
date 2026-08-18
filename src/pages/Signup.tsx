import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  AuthMain, AuthTitle, AuthSubtitle, AuthFormRow, AuthBtn, AuthFormAgree, CloseButton
} from './Auth.styles';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <AppHeader />
      <AuthMain id="signup-main" style={{ position: 'relative' }}>
        <CloseButton onClick={() => navigate(-1)}>✕</CloseButton>
        <AuthTitle>CREATE ACCOUNT</AuthTitle>
        <AuthSubtitle>바이레도의 회원이 되어 다양한 혜택을 누려보세요.</AuthSubtitle>
        
        <AuthFormRow>
          <label>이름</label>
          <input type="text" placeholder="이름을 입력해주세요" />
        </AuthFormRow>
        <AuthFormRow>
          <label>이메일</label>
          <input type="email" placeholder="이메일 주소를 입력해주세요" />
        </AuthFormRow>
        <AuthFormRow>
          <label>비밀번호</label>
          <input type="password" placeholder="영문, 숫자, 특수문자 조합 8자 이상" />
        </AuthFormRow>
        <AuthFormRow>
          <label>비밀번호 확인</label>
          <input type="password" placeholder="비밀번호를 다시 한 번 입력해주세요" />
        </AuthFormRow>
        
        <AuthFormAgree>
          <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer' }}>
            <input type="checkbox" style={{ marginTop: '2px' }} />
            <span style={{ fontSize: '12px', color: '#333', lineHeight: 1.5 }}>
              [필수] 이용약관 및 개인정보 수집 및 이용에 동의합니다. <u style={{ fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '2px' }}>자세히 보기</u>
            </span>
          </label>
          <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', marginTop: '12px' }}>
            <input type="checkbox" style={{ marginTop: '2px' }} />
            <span style={{ fontSize: '12px', color: '#333', lineHeight: 1.5 }}>
              [선택] 마케팅 정보 수신에 동의합니다. (이메일, SMS)
            </span>
          </label>
        </AuthFormAgree>
        
        <AuthBtn variant="submit" onClick={() => navigate('/login')}>회원가입</AuthBtn>
      </AuthMain>
    </AppLayout>
  );
};

export default Signup;
