import styled from 'styled-components';

export const WriteMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: calc(var(--tabbar-h) + 100px);
  background: var(--color-bg-page);
  display: flex;
  flex-direction: column;
`;

export const WriteHeader = styled.div`
  text-align: center;
  padding: 32px 24px 24px;
`;

export const Title = styled.h2`
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 26px;
  font-weight: 400;
  font-style: italic;
  color: #1a1a1a;
  letter-spacing: 0.01em;
  margin: 0;
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 16px 32px;
  padding: 16px;
  background: #fff;
  border: 1px solid #e3e3de;
  border-radius: 4px;
`;

export const ProductImg = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 2px;
  background: #f3f3f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProductCate = styled.span`
  font-family: var(--font-kr);
  font-size: 11px;
  font-weight: 400;
  color: #888;
  letter-spacing: 0.04em;
`;

export const ProductName = styled.h4`
  font-family: var(--font-kr);
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.4;
  letter-spacing: -0.01em;
  margin: 0;
`;

export const RatingSection = styled.div`
  text-align: center;
  padding: 0 24px 32px;
`;

export const RatingLabel = styled.p`
  font-family: var(--font-kr);
  font-size: 12px;
  font-weight: 400;
  color: #888;
  margin: 0 0 12px;
  letter-spacing: 0.03em;
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

export const StarBtn = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: 36px;
  color: ${props => props.active ? '#1a1a1a' : '#d8d8d0'};
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
  
  &:active {
    transform: scale(0.95);
  }
`;

export const TextSection = styled.div`
  flex: 1;
  padding: 0 24px;
  margin-bottom: 32px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0d0c8;
  border-radius: 0;
  background: transparent;
  resize: none;
  font-family: var(--font-kr);
  font-size: 14px;
  font-weight: 400;
  color: #1a1a1a;
  min-height: 120px;
  padding: 8px 0;
  line-height: 1.6;

  &::placeholder {
    color: #b8b8b0;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-bottom-color: #888;
  }
`;

export const Action = styled.div`
  position: fixed;
  bottom: var(--tabbar-h);
  left: 0;
  width: 100%;
  padding: 16px;
  background: var(--color-bg-page);
  z-index: 100;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 54px;
  background: #1a1a1a;
  color: #fff;
  border: none;
  font-family: var(--font-kr);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  cursor: pointer;
  border-radius: 2px;
  transition: opacity 0.2s;

  &:active {
    opacity: 0.8;
  }
`;
