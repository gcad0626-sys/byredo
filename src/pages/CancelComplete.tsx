import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { useOrders } from '../context/OrderContext';
import {
  CompleteMain, MessageWrap, Title, Desc,
  InfoBox, InfoRow, InfoLabel, InfoValue, AmountRow,
  Actions, HomeBtn, OrdersBtn
} from './CancelComplete.styles';

const CancelComplete: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOrderById } = useOrders();
  const order = getOrderById(id || '');

  if (!order) {
    return (
      <AppLayout>
        <AppHeader />
        <CompleteMain style={{ alignItems: 'center', justifyContent: 'center' }}>
          주문 내역을 찾을 수 없습니다.
        </CompleteMain>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <AppHeader />
      <CompleteMain>
        <MessageWrap>
          <Title>취소 신청이 완료되었습니다</Title>
          <Desc>
            요청하신 주문 취소가 정상적으로 접수되었습니다.<br/>
            환불 처리는 카드사에 따라 평일 기준 3~5일 정도<br/>
            소요될 수 있습니다.
          </Desc>
        </MessageWrap>

        <InfoBox>
          <InfoRow>
            <InfoLabel>주문 번호</InfoLabel>
            <InfoValue>{order.orderNumber}</InfoValue>
          </InfoRow>
          <AmountRow>
            <InfoLabel>환불 예정 금액</InfoLabel>
            <InfoValue>₩ {order.totalAmount.toLocaleString()}</InfoValue>
          </AmountRow>
        </InfoBox>

        <Actions>
          <HomeBtn onClick={() => navigate('/')}>홈으로 이동</HomeBtn>
          <OrdersBtn onClick={() => navigate('/mypage/orders')}>주문 내역 확인</OrdersBtn>
        </Actions>
      </CompleteMain>
    </AppLayout>
  );
};

export default CancelComplete;
