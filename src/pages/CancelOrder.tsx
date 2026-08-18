import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import { HeaderContainer, IconButton } from '../components/home/AppHeader.styles';
import { useOrders } from '../context/OrderContext';
import {
  CancelMain, Section, SectionTitle, SummaryBox, SummaryImg, SummaryInfo,
  SummaryName, SummaryOption, SummaryPrice, ReasonList, RadioLabel, RadioCustom, RadioText,
  RefundBox, RefundRow, RefundLabel, RefundValue, RefundDivider, RefundTotalRow,
  Actions, SubmitBtn, BackBtn
} from './CancelOrder.styles';

const CustomHeader = styled(HeaderContainer)`
  justify-content: center;
  position: relative;
`;

const HeaderTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #111;
  font-family: 'Inter', 'Noto Sans KR', sans-serif;
`;

const BackIconWrapper = styled.div`
  position: absolute;
  left: 16px;
`;

const CancelOrder: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOrderById, updateOrderStatus } = useOrders();
  const order = getOrderById(id || '');
  const [reason, setReason] = useState('단순 변심');

  if (!order) {
    return (
      <AppLayout>
        <CustomHeader>
          <BackIconWrapper>
            <IconButton onClick={() => navigate(-1)} aria-label="뒤로가기">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </IconButton>
          </BackIconWrapper>
          <HeaderTitle>주문취소</HeaderTitle>
        </CustomHeader>
        <CancelMain style={{ padding: '40px 16px', textAlign: 'center' }}>
          주문 내역을 찾을 수 없습니다.
        </CancelMain>
      </AppLayout>
    );
  }

  const firstItem = order.items[0];

  const handleSubmit = () => {
    updateOrderStatus(order.id, '취소 완료');
    navigate(`/mypage/cancel-complete/${order.id}`, { replace: true });
  };

  return (
    <AppLayout>
      <CustomHeader>
        <BackIconWrapper>
          <IconButton onClick={() => navigate(-1)} aria-label="뒤로가기">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </IconButton>
        </BackIconWrapper>
        <HeaderTitle>주문취소</HeaderTitle>
      </CustomHeader>
      
      <CancelMain>
        <Section>
          <SectionTitle>ORDER SUMMARY</SectionTitle>
          <SummaryBox>
            <SummaryImg>
              <img src={firstItem.image} alt={firstItem.name} />
            </SummaryImg>
            <SummaryInfo>
              <SummaryName>{firstItem.name}</SummaryName>
              <SummaryOption>Hand Cream {firstItem.option}</SummaryOption>
              <SummaryPrice>₩ {firstItem.price.toLocaleString()}</SummaryPrice>
            </SummaryInfo>
          </SummaryBox>
        </Section>

        <Section>
          <SectionTitle>REASON FOR CANCELLATION</SectionTitle>
          <ReasonList>
            {['단순 변심', '상품 정보 오기재', '배송 지연', '기타'].map((r) => (
              <RadioLabel key={r}>
                <input 
                  type="radio" 
                  name="cancel_reason" 
                  value={r} 
                  checked={reason === r}
                  onChange={(e) => setReason(e.target.value)}
                />
                <RadioCustom checked={reason === r} />
                <RadioText>{r}</RadioText>
              </RadioLabel>
            ))}
          </ReasonList>
        </Section>

        <Section>
          <SectionTitle>REFUND INFO</SectionTitle>
          <RefundBox>
            <RefundRow>
              <RefundLabel>환불 수단</RefundLabel>
              <RefundValue>{order.paymentMethod === 'card' ? '신용카드' : '무통장 입금'} (**** 1234)</RefundValue>
            </RefundRow>
            <RefundDivider />
            <RefundTotalRow>
              <RefundLabel>환불 예상 금액</RefundLabel>
              <RefundValue>₩ {order.totalAmount.toLocaleString()}</RefundValue>
            </RefundTotalRow>
          </RefundBox>
        </Section>

        <Actions>
          <SubmitBtn onClick={handleSubmit}>취소 신청하기</SubmitBtn>
          <BackBtn onClick={() => navigate(-1)}>돌아가기</BackBtn>
        </Actions>
      </CancelMain>
    </AppLayout>
  );
};

export default CancelOrder;
