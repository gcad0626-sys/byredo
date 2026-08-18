import styled from 'styled-components';

export const DetailMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: calc(var(--tabbar-h) + 100px);
  background: var(--color-bg-page);
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  padding: 32px 24px 24px;
`;

export const Title = styled.h2`
  font-family: var(--font-kr);
  font-size: 20px;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
`;

export const InfoGroup = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Label = styled.span`
  font-family: var(--font-kr);
  font-size: 12px;
  color: #58564f;
  font-weight: 500;
  flex-shrink: 0;
`;

export const Value = styled.span`
  font-family: var(--font-kr);
  font-size: 14px;
  color: #1a1a1a;
  text-align: right;
  line-height: 1.5;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: var(--box-line);
  margin: 0;
`;

export const Section = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionTitle = styled.h3`
  font-family: var(--font-kr);
  font-size: 13px;
  font-weight: 600;
  color: #58564f;
  margin: 0 0 8px;
`;

export const Product = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ProductImg = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background: #f3f3f0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h4`
  font-family: var(--font-kr);
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px;
  cursor: pointer;
`;

export const ProductOption = styled.p`
  font-family: var(--font-kr);
  font-size: 13px;
  color: #888;
  margin: 0 0 12px;
`;

export const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductQty = styled.span`
  font-family: var(--font-kr);
  font-size: 13px;
  color: #58564f;
`;

export const ProductPrice = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
`;

export const ReviewBtn = styled.button`
  margin-top: 8px;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #1a1a1a;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 500;
  color: #1a1a1a;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s;

  &:active {
    background: #f5f5f5;
  }
`;

export const SummaryDivider = styled.div`
  height: 1px;
  background-color: #d0d0c8;
  margin: 8px 0;
`;

export const TotalRow = styled(Row)`
  ${Label} {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
  }
  ${Value} {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const Actions = styled.div`
  position: fixed;
  bottom: var(--tabbar-h);
  left: 0;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--color-bg-page);
  z-index: 100;
`;

export const ActionBtn = styled.button<{ outline?: boolean }>`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-kr);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03em;
  cursor: pointer;
  border-radius: 2px;
  transition: opacity 0.2s;

  background: ${props => props.outline ? '#fff' : '#1a1a1a'};
  color: ${props => props.outline ? '#1a1a1a' : '#fff'};
  border: 1px solid ${props => props.outline ? '#c8c8c0' : '#1a1a1a'};

  &:active {
    opacity: 0.8;
  }
`;
