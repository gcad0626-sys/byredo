import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import { HeaderContainer, IconButton } from '../components/home/AppHeader.styles';
import { 
  DetailMain, TitleBox, Title, InfoGroup, Row, Label, Value, Divider, 
  Section, SectionTitle, Product, ProductImg, ProductInfo, ProductName, ProductOption, 
  ProductBottom, ProductQty, ProductPrice, ReviewBtn, SummaryDivider, TotalRow, 
  Actions, ActionBtn 
} from './OrderDetail.styles';
import { useOrders } from '../context/OrderContext';

const BackHeader = styled(HeaderContainer)`
  justify-content: flex-start;
  gap: 8px;
  padding: 0 8px 0 4px;
`;

const BackTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #111;
`;

const OrderDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL 파라미터 활용 가능
  const { getOrderById } = useOrders();
  const order = getOrderById(id || '');

  if (!order) {
    return (
      <AppLayout>
        <BackHeader>
          <IconButton onClick={() => navigate(-1)} aria-label="뒤로가기">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </IconButton>
          <BackTitle>주문 상세 내역</BackTitle>
        </BackHeader>
        <DetailMain style={{ padding: '40px 16px', textAlign: 'center' }}>
          주문 내역을 찾을 수 없습니다.
        </DetailMain>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <BackHeader>
        <IconButton onClick={() => navigate(-1)} aria-label="뒤로가기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </IconButton>
        <BackTitle>주문 상세 내역</BackTitle>
      </BackHeader>
      <DetailMain id="order-detail-main">
        <TitleBox>
          <Title>주문 상세 내역</Title>
        </TitleBox>
        
        <InfoGroup>
          <Row>
            <Label>주문번호</Label>
            <Value>{order.orderNumber}</Value>
          </Row>
          <Row>
            <Label>주문일자</Label>
            <Value>{order.date}</Value>
          </Row>
          <Row>
            <Label>주문상태</Label>
            <Value>{order.status}</Value>
          </Row>
        </InfoGroup>
        
        <Divider />
        
        <Section>
          <SectionTitle>주문 상품 정보</SectionTitle>
          {order.items.map((item, idx) => (
            <Product key={idx}>
              <ProductImg onClick={() => navigate(`/products/${item.id}`)}>
                <img src={item.image} alt={item.name} />
              </ProductImg>
              <ProductInfo>
                <ProductName onClick={() => navigate(`/products/${item.id}`)}>{item.name}</ProductName>
                <ProductOption>{item.option?.includes('ML') ? item.option : '30ML'}</ProductOption>
                <ProductBottom>
                  <ProductQty>{item.qty}개</ProductQty>
                  <ProductPrice>₩{(item.price * item.qty).toLocaleString()}</ProductPrice>
                </ProductBottom>
                {order.status !== '취소 완료' && (
                  <ReviewBtn onClick={(e) => {
                    e.stopPropagation();
                    navigate('/mypage/write-review', { state: { product: item } });
                  }}>
                    이 상품 리뷰 쓰기
                  </ReviewBtn>
                )}
              </ProductInfo>
            </Product>
          ))}
        </Section>
        
        <Divider />
        
        <Section>
          <SectionTitle>배송지 정보</SectionTitle>
          <Row>
            <Label>받는 사람</Label>
            <Value>{order.shippingInfo.name}</Value>
          </Row>
          <Row>
            <Label>연락처</Label>
            <Value>{order.shippingInfo.phone}</Value>
          </Row>
          <Row>
            <Label>주소</Label>
            <Value>{order.shippingInfo.address}</Value>
          </Row>
          <Row>
            <Label>배송 메모</Label>
            <Value>{order.shippingInfo.memo}</Value>
          </Row>
        </Section>
        
        <Divider />
        
        <Section>
          <SectionTitle>결제 정보</SectionTitle>
          <Row>
            <Label>결제 수단</Label>
            <Value>{order.paymentMethod === 'card' ? '신용카드' : order.paymentMethod === 'payco' ? '페이코' : '무통장 입금'}</Value>
          </Row>
          <Row>
            <Label>상품 금액</Label>
            <Value>₩{order.totalAmount.toLocaleString()}</Value>
          </Row>
          <Row>
            <Label>배송비</Label>
            <Value>₩0</Value>
          </Row>
          <SummaryDivider />
          <TotalRow>
            <Label>총 결제 금액</Label>
            <Value>₩{order.totalAmount.toLocaleString()}</Value>
          </TotalRow>
        </Section>
        
      </DetailMain>
      <Actions>
        {(order.status === '결제 완료' || order.status === '상품 준비중') && (
          <ActionBtn outline onClick={() => navigate(`/mypage/cancel-order/${order.id}`)}>주문 취소</ActionBtn>
        )}
        {(order.status === '배송중' || order.status === '배송완료') && (
          <ActionBtn outline onClick={() => navigate(`/mypage/exchange-return/${order.id}`)}>교환/반품 신청</ActionBtn>
        )}
      </Actions>
    </AppLayout>
  );
};

export default OrderDetail;
