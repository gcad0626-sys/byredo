import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { 
  ExchangeReturnMain, Section, SectionTitle, ProductBox, ProductImg, ProductInfo, 
  ProductName, ProductOption, ProductPrice, TypeSelect, TypeBtn, ReasonList, 
  RadioLabel, RadioCustom, RadioText, RefundBox, RefundRow, RefundLabel, 
  RefundValue, RefundDivider, RefundTotalRow, Actions, SubmitBtn, CancelBtn 
} from './ExchangeReturn.styles';
import styled from 'styled-components';
import { useOrders } from '../context/OrderContext';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #111;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ExchangeReturn: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOrderById, updateOrderStatus } = useOrders();
  const order = getOrderById(id || '');

  const [type, setType] = useState<'exchange' | 'return'>('exchange');
  const [reason, setReason] = useState('단순 변심');

  if (!order) {
    return (
      <AppLayout>
        <div style={{ padding: '40px 16px', textAlign: 'center' }}>주문 정보를 찾을 수 없습니다.</div>
      </AppLayout>
    );
  }

  // 첫 번째 상품을 대표로 표시 (실제로는 여러 개일 수 있음)
  const repItem = order.items[0];

  return (
    <AppLayout>
      <Header>
        <BackBtn onClick={() => navigate(-1)} aria-label="뒤로가기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </BackBtn>
        <Title>교환/반품 신청</Title>
        <div style={{ width: 24 }} />
      </Header>
      
      <ExchangeReturnMain>
        <Section>
          <SectionTitle>ORDER SUMMARY</SectionTitle>
          <ProductBox>
            <ProductImg><img src={repItem.image} alt={repItem.name} /></ProductImg>
            <ProductInfo>
              <ProductName>{repItem.name}</ProductName>
              <ProductOption>{repItem.option}</ProductOption>
              <ProductPrice>₩ {repItem.price.toLocaleString()}</ProductPrice>
            </ProductInfo>
          </ProductBox>
        </Section>
        
        <Section>
          <SectionTitle>APPLICATION TYPE</SectionTitle>
          <TypeSelect>
            <TypeBtn active={type === 'exchange'} onClick={() => setType('exchange')}>교환</TypeBtn>
            <TypeBtn active={type === 'return'} onClick={() => setType('return')}>반품</TypeBtn>
          </TypeSelect>
        </Section>
        
        <Section>
          <SectionTitle>REASON FOR {type === 'exchange' ? 'EXCHANGE' : 'CANCELLATION'}</SectionTitle>
          <ReasonList>
            <RadioLabel onClick={() => setReason('단순 변심')}>
              <RadioCustom checked={reason === '단순 변심'} />
              <RadioText>단순 변심</RadioText>
            </RadioLabel>
            <RadioLabel onClick={() => setReason('상품 정보 오기재')}>
              <RadioCustom checked={reason === '상품 정보 오기재'} />
              <RadioText>상품 정보 오기재</RadioText>
            </RadioLabel>
            <RadioLabel onClick={() => setReason('상품 불량/파손')}>
              <RadioCustom checked={reason === '상품 불량/파손'} />
              <RadioText>상품 불량/파손</RadioText>
            </RadioLabel>
            <RadioLabel onClick={() => setReason('오배송')}>
              <RadioCustom checked={reason === '오배송'} />
              <RadioText>오배송</RadioText>
            </RadioLabel>
            <RadioLabel onClick={() => setReason('기타')}>
              <RadioCustom checked={reason === '기타'} />
              <RadioText>기타</RadioText>
            </RadioLabel>
          </ReasonList>
        </Section>
        
        <Section>
          <SectionTitle>{type === 'exchange' ? 'EXCHANGE INFO' : 'REFUND INFO'}</SectionTitle>
          <RefundBox>
            <RefundRow>
              <RefundLabel>상품 금액</RefundLabel>
              <RefundValue>₩ {order.totalAmount.toLocaleString()}</RefundValue>
            </RefundRow>
            {type === 'return' && (
              <RefundRow>
                <RefundLabel>결제 수단</RefundLabel>
                <RefundValue>{order.paymentMethod === 'card' ? '신용카드' : order.paymentMethod === 'payco' ? '페이코' : '무통장 입금'}</RefundValue>
              </RefundRow>
            )}
            <RefundDivider />
            <RefundTotalRow>
              <RefundLabel>{type === 'exchange' ? '추가 결제/환불 금액' : '환불 예상 금액'}</RefundLabel>
              <RefundValue>{type === 'exchange' ? '₩ 0' : `₩ ${order.totalAmount.toLocaleString()}`}</RefundValue>
            </RefundTotalRow>
          </RefundBox>
        </Section>
        
        <Actions>
          <SubmitBtn onClick={() => {
            updateOrderStatus(order.id, type === 'exchange' ? '교환 신청' : '반품 신청');
            alert('신청이 완료되었습니다.');
            navigate('/mypage');
          }}>
            {type === 'exchange' ? '교환' : '반품'} 신청하기
          </SubmitBtn>
          <CancelBtn onClick={() => navigate(-1)}>돌아가기</CancelBtn>
        </Actions>
      </ExchangeReturnMain>
    </AppLayout>
  );
};

export default ExchangeReturn;
