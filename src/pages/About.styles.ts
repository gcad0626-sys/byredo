import styled from 'styled-components';

export const AboutMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fafaf9;
`;

export const Section = styled.section`
  width: 100%;
  margin-bottom: 60px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
`;

export const TextContent = styled.div`
  padding: 40px 24px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #111;
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.5;
  color: #111;
  word-break: keep-all;
`;

export const Description = styled.p`
  font-size: 13px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 80px;
  word-break: keep-all;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const YearTitle = styled.div`
  font-family: 'EB Garamond', serif;
  font-size: 80px;
  font-weight: 400;
  text-align: center;
  margin: 60px 0;
  color: #111;
`;
