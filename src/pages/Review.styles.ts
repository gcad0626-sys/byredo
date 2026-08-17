import styled from 'styled-components';

export const ReviewMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fafaf9;
  padding-bottom: var(--tabbar-h);
`;

export const ReviewHeader = styled.div`
  text-align: center;
  padding: 40px 16px 32px;
`;

export const Title = styled.h2`
  font-family: 'EB Garamond', serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
`;

export const ReviewList = styled.div`
  padding: 0 24px 40px;
`;

export const ReviewItem = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid #e5e5e5;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const ReviewImg = styled.div`
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  background: #e0e0e0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ReviewContent = styled.div`
  flex: 1;
`;

export const ReviewTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
`;

export const ReviewName = styled.h4`
  font-size: 14px;
  font-weight: 600;
  font-family: 'EB Garamond', serif;
  letter-spacing: 0.5px;
  margin: 0;
  cursor: pointer;
`;

export const ReviewDate = styled.span`
  font-size: 11px;
  color: #666;
  font-weight: 600;
`;

export const ReviewStars = styled.div`
  font-size: 12px;
  color: #111;
  margin-bottom: 12px;
`;

export const ReviewText = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  word-break: keep-all;
  margin-bottom: 16px;
  margin-top: 0;
`;

export const ReviewActions = styled.div`
  display: flex;
  gap: 12px;

  button {
    background: transparent;
    border: none;
    font-size: 14px;
    color: #555;
    cursor: pointer;
    padding: 0;
    font-weight: 500;
    text-decoration: underline;
  }
`;
