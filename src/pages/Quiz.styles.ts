import styled from 'styled-components';

export const QuizMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: #fafaf9;
  position: relative;
  overflow-y: auto;
`;

export const QuizHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  background: #fafaf9;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const CloseBtn = styled.button`
  color: #111;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #111;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const QuizContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 24px calc(var(--tabbar-h) + 16px);
  color: #111;
`;

/* Step 1: Intro */
export const IntroWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const IntroTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 24px;
  color: #111;
`;

export const IntroDesc = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
`;

export const IntroDivider = styled.div`
  width: 40px;
  height: 1px;
  background: #ccc;
  margin-bottom: 24px;
`;

export const IntroMeta = styled.div`
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #666;
  font-weight: 500;
`;

export const BlackBtn = styled.button`
  width: 100%;
  height: 52px;
  background: #222;
  color: #fff;
  border: none;
  font-size: 12px;
  letter-spacing: 0.1em;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-top: auto;
`;

/* Step 2: Questions */
export const QTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const QItem = styled.div`
  margin-bottom: 40px;
`;

export const QNumDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  span.num {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    color: #ccc;
  }
  span.desc {
    font-size: 13px;
    font-weight: 500;
  }
`;

export const OptionRow = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #e5e5e5;
  background: ${props => props.active ? '#f5f5f5' : '#fff'};
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 13px;

  .radio {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${props => props.active ? '#111' : '#ccc'};
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background: #111;
      border-radius: 50%;
      display: ${props => props.active ? 'block' : 'none'};
    }
  }
`;

export const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

export const OptionBox = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  border: 1px solid #e5e5e5;
  background: ${props => props.active ? '#f5f5f5' : '#fff'};
  cursor: pointer;
  font-size: 12px;

  .radio {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${props => props.active ? '#111' : '#ccc'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background: #111;
      border-radius: 50%;
      display: ${props => props.active ? 'block' : 'none'};
    }
  }
`;

export const OptionPill = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  border: 1px solid ${props => props.active ? '#111' : '#e5e5e5'};
  border-radius: 30px;
  background: #fff;
  cursor: pointer;
  font-size: 11px;
  letter-spacing: 0.1em;
  font-weight: 500;
`;

export const OptionLine = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  font-size: 13px;

  .radio {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${props => props.active ? '#111' : '#ccc'};
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background: #111;
      border-radius: 50%;
      display: ${props => props.active ? 'block' : 'none'};
    }
  }
`;

/* Step 3: Result Summary */
export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 40px;
`;

export const ResultSub = styled.div`
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #666;
  margin-bottom: 16px;
`;

export const ResultTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const ResultTags = styled.div`
  font-size: 11px;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const ResultLine = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin-bottom: 32px;
`;

export const ResultDesc = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const ResultBestMatch = styled.div`
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #666;
  margin-bottom: 24px;
`;

export const ResultProductName = styled.h3`
  font-family: 'EB Garamond', serif;
  font-size: 28px;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
`;

export const ResultProductDesc = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 40px;
`;

export const ResultPrice = styled.div`
  font-size: 12px;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
`;

export const RetakeBtn = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #666;
  margin-top: 24px;
  cursor: pointer;
`;

/* Step 4: Result List */
export const RecTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const RecItem = styled.div`
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e5e5e5;
`;

export const RecNum = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  span.num {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    color: #666;
  }
  span.badge {
    font-size: 10px;
    background: #e5e5e5;
    padding: 2px 6px;
    color: #333;
    letter-spacing: 0.05em;
  }
`;

export const RecName = styled.h3`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
`;

export const RecKo = styled.p`
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
`;

export const RecTags = styled.div`
  font-size: 11px;
  letter-spacing: 0.05em;
  color: #666;
  margin-bottom: 16px;
`;

export const RecBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const RecPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  .vol {
    font-size: 12px;
    color: #666;
  }
  .price {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const RecViewBtn = styled.button`
  background: none;
  border: none;
  font-size: 11px;
  letter-spacing: 0.05em;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RecCartBtn = styled.button`
  background: #111;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 8px;
  
  img {
    width: 16px;
    height: 16px;
    filter: invert(1);
  }
`;
