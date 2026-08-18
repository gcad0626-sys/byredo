import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import { HeaderContainer, LogoWrapper } from '../components/home/AppHeader.styles';
import { 
  CompleteMain, MessageBlock, Title, Subtitle, 
  Card, Row, Divider, Label, Value, 
  AddressBlock, AddressText, Actions, ActionBtn 
} from './OrderComplete.styles';
import { useOrders } from '../context/OrderContext';

const CompleteHeader = styled(HeaderContainer)`
  justify-content: center;
  position: relative;
`;

const OrderComplete: React.FC = () => {
  const navigate = useNavigate();
  const { orders } = useOrders();
  const latestOrder = orders.length > 0 ? orders[0] : null;

  return (
    <AppLayout>
      <CompleteHeader>
        <LogoWrapper>
          <img src="/org/img/logo.png" alt="BYREDO logo" />
        </LogoWrapper>
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
        
        <Actions>
          <ActionBtn onClick={() => navigate('/mypage/orders')}>주문 내역 보기</ActionBtn>
          <ActionBtn outline onClick={() => navigate('/')}>쇼핑 계속하기</ActionBtn>
        </Actions>
      </CompleteMain>
    </AppLayout>
  );
};

export default OrderComplete;
