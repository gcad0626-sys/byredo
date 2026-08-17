import styled from 'styled-components';

export const DetailMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fafaf9;
  padding-bottom: 80px; /* space for fixed bottom action */
  position: relative;
`;

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  background: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroIndicator = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 6px;
  
  span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    
    &.active {
      background: #111;
    }
  }
`;

export const InfoSection = styled.div`
  padding: 24px 16px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const InfoCate = styled.span`
  font-size: 10px;
  letter-spacing: 1px;
  color: #666;
  display: block;
  margin-bottom: 6px;
`;

export const InfoTitle = styled.h2`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const InfoDesc = styled.p`
  font-size: 13px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const InfoPrice = styled.p`
  font-family: var(--font-kr);
  font-size: 18px;
  font-weight: 600;
`;

export const DetailWishBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 16px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  z-index: 2;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionsSection = styled.div`
  padding: 24px 16px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const OptionsLabel = styled.h3`
  font-size: 11px;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
`;

export const Sizes = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;

  button {
    flex: 1;
    height: 40px;
    border: 1px solid #e0e0e0;
    background: #fff;
    font-size: 12px;
    color: #666;
    cursor: pointer;

    &.is-active {
      border: 1px solid #111;
      color: #111;
      font-weight: 600;
    }
  }
`;

export const QtyControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  width: max-content;
  height: 40px;

  button {
    width: 40px;
    height: 100%;
    font-size: 16px;
    color: #666;
    background: none;
    border: none;
    cursor: pointer;
  }

  span {
    width: 32px;
    text-align: center;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AccordionContainer = styled.div`
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const AccordionItem = styled.div`
  border-top: 1px solid #f0f0f0;
  
  &:first-child {
    border-top: none;
  }
`;

export const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: none;
  border: none;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
`;

export const AccordionContent = styled.div<{ isExpanded: boolean }>`
  padding: ${props => props.isExpanded ? '0 16px 24px' : '0'};
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  display: ${props => props.isExpanded ? 'block' : 'none'};

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 4px;
      strong { color: #333; }
    }
  }
`;

export const ActionBottom = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  border-top: 1px solid #e0e0e0;
  z-index: 10;
  flex-shrink: 0;
`;


export const ActionBtn = styled.button<{ primary?: boolean }>`
  flex: 1;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  
  background: ${props => props.primary ? 'var(--color-ink)' : '#fff'};
  color: ${props => props.primary ? '#fff' : 'var(--color-ink)'};
`;

export const GiftSection = styled.div`
  padding: 24px 16px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const GiftBox = styled.div`
  border: 1px solid #e0e0e0;
  background: #fafaf9;
  padding: 16px;
`;

export const GiftBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const GiftBoxTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: #333;
`;

export const ToggleSwitch = styled.div`
  position: relative;
  width: 36px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  label {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;

    &::before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + label {
    background-color: #111;
  }

  input:checked + label::before {
    transform: translateX(16px);
  }
`;

export const GiftBoxContent = styled.div`
  span {
    display: block;
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;
  }

  textarea {
    width: 100%;
    height: 60px;
    border: 1px solid #e0e0e0;
    background: #fafaf9;
    padding: 12px;
    font-size: 12px;
    color: #333;
    font-family: inherit;
    resize: none;

    &:disabled {
      opacity: 0.5;
    }
  }
`;

export const ReviewsSection = styled.div`
  padding: 24px 16px;
  background: #fff;
  margin-bottom: 24px;
`;

export const ReviewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h3 {
    font-size: 11px;
    font-weight: 700;
  }

  a {
    font-size: 11px;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export const ReviewItem = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 24px;
`;

export const ReviewMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Stars = styled.div`
  font-size: 12px;
  color: #111;
`;

export const ReviewDate = styled.div`
  font-size: 10px;
  color: #888;
`;

export const ReviewText = styled.p`
  font-size: 12px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const ReviewAuthor = styled.span`
  font-size: 11px;
  color: #666;
  font-family: 'EB Garamond', serif;
  font-style: italic;
`;

export const BtnMoreReviews = styled.button`
  width: 100%;
  height: 48px;
  border: 1px solid #e0e0e0;
  background: #fafaf9;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  margin-top: 8px;
`;

