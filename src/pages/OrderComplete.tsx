import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import { HeaderContainer, LogoWrapper, IconButton } from '../components/home/AppHeader.styles';
import { 
  CompleteMain, MessageBlock, Title, Subtitle, 
  Card, Row, Divider, Label, Value, 
  AddressBlock, AddressText, Actions, ActionBtn 
} from './OrderComplete.styles';
import { useOrders } from '../context/OrderContext';
import { useCart } from '../context/CartContext';

const CompleteHeader = styled(HeaderContainer)`
  justify-content: center;
  position: relative;
`;

const OrderComplete: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orders, addOrder } = useOrders();
  const { clearCart } = useCart();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paymentKey = params.get('paymentKey');
    
    if (paymentKey) {
      const tempOrderStr = sessionStorage.getItem('temp_order');
      if (tempOrderStr) {
        try {
          const tempOrder = JSON.parse(tempOrderStr);
          tempOrder.status = '결제 완료';
          tempOrder.paymentKey = paymentKey;

          addOrder(tempOrder);

          if (!tempOrder.isDirectPurchase) {
            clearCart();
          }

          sessionStorage.removeItem('temp_order');
          
          navigate('/order-complete', { replace: true });
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, [location.search, navigate, addOrder, clearCart]);

  const latestOrder = orders.length > 0 ? orders[0] : null;

  return (
    <AppLayout>
      <CompleteHeader>
        <LogoWrapper>
          <img src="/img/logo.png" alt="BYREDO logo" />
        </LogoWrapper>
        <IconButton 
          onClick={() => navigate('/')} 
          style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)' }}
          aria-label="닫기"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </IconButton>
      </CompleteHeader>
      <CompleteMain id="order-complete-main">
        <MessageBlock>
          <Title>주문이 완료되었습니다</Title>
          <Subtitle>고객님의 주문이 성공적으로 접수되었습니다.<br/>이용해 주셔서 감사합니다.</Subtitle>
        </MessageBlock>
        
        <Card>
          <Row>
            <Label>ORDER NUMBER</Label>
            <Value>{latestOrder ? latestOrder.orderNumber : '#-'}</Value>
          </Row>
          <Divider />
          <Row>
            <Label>DATE</Label>
            <Value>{latestOrder ? latestOrder.date : '-'}</Value>
          </Row>
          <Divider />
          <Row>
            <Label>TOTAL AMOUNT</Label>
            <Value isAmount>₩{latestOrder ? latestOrder.totalAmount.toLocaleString() : '0'}</Value>
          </Row>
          {latestOrder && (
            <>
              <Divider />
              <AddressBlock>
                <Label>SHIPPING TO</Label>
                <AddressText>
                  {latestOrder.shippingInfo.name}<br/>
                  {latestOrder.shippingInfo.phone}<br/>
                  {latestOrder.shippingInfo.address}
                </AddressText>
              </AddressBlock>
            </>
          )}
        </Card>
      </CompleteMain>
      <Actions>
        <ActionBtn onClick={() => navigate('/mypage/orders')}>주문 내역 보기</ActionBtn>
        <ActionBtn outline onClick={() => navigate('/')}>쇼핑 계속하기</ActionBtn>
      </Actions>
    </AppLayout>
  );
};

export default OrderComplete;
