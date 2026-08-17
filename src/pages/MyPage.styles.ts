import styled from 'styled-components';

export const MyPageMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fafaf9;
  padding-bottom: var(--tabbar-h);
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px 32px;
`;

export const Avatar = styled.div`
  width: 72px;
  height: 72px;
  background: #f0f0f0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
`;

export const Name = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 8px;
`;

export const Membership = styled.p`
  font-size: 13px;
  color: #666;
  letter-spacing: 0.5px;
  margin: 0;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 16px 24px;
`;

export const ActionBtn = styled.a`
  flex: 1;
  height: 72px;
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  span {
    font-size: 11px;
    font-weight: 500;
    color: #333;
    letter-spacing: 0.05em;
  }
`;

export const OrdersSection = styled.div`
  padding: 0 16px 40px;
`;

export const OrdersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }

  a {
    font-size: 12px;
    color: #666;
  }
`;

export const OrderCard = styled.div`
  background: #f7f7f5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const OrderTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 12px;
  margin-bottom: 16px;
`;

export const OrderDate = styled.span`
  font-size: 11px;
  color: #333;
`;

export const OrderStatus = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #111;
`;

export const OrderProduct = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const ProductImg = styled.div`
  width: 72px;
  height: 72px;
  background: #e0e0e0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h4`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: 600;
  margin: 2px 0 0;
`;

export const ProductOption = styled.p`
  font-size: 12px;
  color: #666;
  margin: 6px 0 0;
`;

export const ProductPrice = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 14px;
  font-weight: 600;
  margin-top: auto;
`;

export const OrderActions = styled.div`
  display: flex;
  gap: 8px;

  button {
    flex: 1;
    height: 40px;
    background: #fff;
    border: 1px solid #d0d0d0;
    font-size: 12px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
  }
`;
