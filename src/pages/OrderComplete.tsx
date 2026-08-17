import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  CompleteMain, MessageBlock, Title, Subtitle, 
  Card, Row, Divider, Label, Value, 
  AddressBlock, AddressText, Actions, ActionBtn 
} from './OrderComplete.styles';

const OrderComplete: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <AppHeader />
      {/* 실제 구현시 결제 완료 전용 헤더 사용 가능 */}
      <CompleteMain id="order-complete-main">
        <MessageBlock>
          <Title>주문이 완료되었습니다</Title>
          <Subtitle>고객님의 주문이 성공적으로 접수되었습니다.<br/>이용해 주셔서 감사합니다.</Subtitle>
        </MessageBlock>
        
        <Card>
          <Row>
            <Label>ORDER NUMBER</Label>
            <Value>#20240512-1029</Value>
          </Row>
          <Divider />
          <Row>
            <Label>DATE</Label>
            <Value>2024. 05. 12 14:30</Value>
          </Row>
          <Divider />
          <Row>
            <Label>TOTAL AMOUNT</Label>
            <Value isAmount>₩140,000</Value>
          </Row>
          <Divider />
          <AddressBlock>
            <Label>SHIPPING TO</Label>
            <AddressText>
              홍길동<br/>
              010-1234-5678<br/>
              [06035] 서울특별시 강남구 도산대로 45길 10-5<br/>
              101호
            </AddressText>
          </AddressBlock>
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
