import styled from 'styled-components';

export const AboutMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fafaf9;
  padding-bottom: var(--tabbar-h);
`;

export const AboutHero = styled.div`
  width: 100%;
  
  img {
    width: 100%;
    display: block;
  }
`;

export const AboutContent = styled.div`
  padding: 40px 24px;
  text-align: center;
`;

export const AboutTitle = styled.h2`
  font-family: 'EB Garamond', serif;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const AboutText = styled.p`
  font-size: 13px;
  color: #333;
  line-height: 1.8;
  margin-bottom: 40px;
  word-break: keep-all;
`;

export const AboutSignature = styled.div`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-style: italic;
  color: #111;
  margin-top: 40px;
`;

export const AboutImage = styled.div`
  margin: 0 16px 40px;
  
  img {
    width: 100%;
    display: block;
  }
`;
