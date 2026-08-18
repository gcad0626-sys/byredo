import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  CheckoutMain, CheckoutSection, SectionTitle, 
  CheckoutForm, FormRow, FormZip, FormSelect,
  CheckoutProduct, ProductImg, ProductInfo, ProductCate, ProductName, ProductOption, ProductPrice,
  CheckoutSummary, SummaryTotal, 
  PayTabs, PayBox, CheckoutAgree, CheckboxLabel, CheckoutAction
} from './Checkout.styles';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { items, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [payMethod, setPayMethod] = useState('card');

  // Form states
  const [name, setName] = useState('홍길동');
  const [phone, setPhone] = useState('010-1234-5678');
  const [zipcode, setZipcode] = useState('06035');
  const [address, setAddress] = useState('서울특별시 강남구 도산대로 45길 10-5');
  const [addressDetail, setAddressDetail] = useState('');
  const [memo, setMemo] = useState('배송 전 연락바랍니다.');
  
  const [showPostcode, setShowPostcode] = useState(false);

  useEffect(() => {
    // Load Daum Postcode script
    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openPostcode = () => {
    setShowPostcode(true);
    setTimeout(() => {
      if ((window as any).daum && (window as any).daum.Postcode) {
        new (window as any).daum.Postcode({
          oncomplete: function(data: any) {
            setZipcode(data.zonecode);
            setAddress(data.address);
            setAddressDetail(''); // Reset detail address
            setShowPostcode(false);
          },
          width: '100%',
          height: '100%'
        }).embed(document.getElementById('postcode-container'));
      } else {
        alert('우편번호 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
        setShowPostcode(false);
      }
    }, 100);
  };

  const isDirectPurchase = location.state && location.state.product;
  const directPrice = location.state?.price || location.state?.product?.price;
  const directItem = isDirectPurchase ? {
    id: 'direct',
    name: location.state.product.name,
    image: location.state.product.image,
    option: location.state.size,
    qty: location.state.qty,
    price: directPrice
  } : null;

  const checkoutItems = isDirectPurchase ? [directItem!] : items;
  const totalAmount = checkoutItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handlePayment = () => {
    // 결제 로직: 주문 내역 생성 및 Context에 추가
    const newOrderId = Date.now().toString();
    const now = new Date();
    const orderNumber = `#${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${newOrderId.slice(-4)}`;
    
    const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newOrder = {
      id: newOrderId,
      orderNumber,
      date: formattedDate,
      status: '결제 완료',
      items: checkoutItems.map(item => ({
        id: item.id,
        name: item.name,
        image: item.image,
        option: item.option,
        qty: item.qty,
        price: item.price
      })),
      totalAmount,
      shippingInfo: { name, phone, address: `${address} ${addressDetail}`, memo },
      paymentMethod: payMethod
    };
    
    addOrder(newOrder);

    // 바로구매가 아니라 장바구니 결제라면 장바구니 비우기
    if (!isDirectPurchase) {
      clearCart();
    }

    // 결제 로직 후 완료 페이지로 이동
    navigate('/order-complete');
  };

  return (
    <AppLayout>
      <AppHeader />
      {/* 실제 구현시 커스텀 Checkout Header 사용 가능 */}
      <CheckoutMain id="checkout-main" style={{ position: 'relative' }}>
        <CheckoutSection>
          <SectionTitle>배송 정보</SectionTitle>
          <CheckoutForm>
            <FormRow>
              <label>이름</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormRow>
            <FormRow>
              <label>연락처</label>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </FormRow>
            <FormRow>
              <label>주소</label>
              <FormZip>
                <input type="text" value={zipcode} readOnly placeholder="우편번호" />
                <button type="button" onClick={openPostcode}>우편번호 찾기</button>
              </FormZip>
              <input type="text" value={address} readOnly placeholder="기본 주소" style={{ marginTop: '8px' }} />
              <input type="text" value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)} placeholder="상세 주소를 입력해주세요" style={{ marginTop: '8px' }} />
            </FormRow>
            <FormRow>
              <label>배송 요청사항</label>
              <FormSelect>
                <select value={memo} onChange={(e) => setMemo(e.target.value)}>
                  <option value="배송 전 연락바랍니다.">배송 전 연락바랍니다.</option>
                  <option value="문 앞에 놓아주세요.">문 앞에 놓아주세요.</option>
                  <option value="경비실에 맡겨주세요.">경비실에 맡겨주세요.</option>
                </select>
              </FormSelect>
            </FormRow>
          </CheckoutForm>
        </CheckoutSection>

        <CheckoutSection>
          <SectionTitle>주문 상품 정보</SectionTitle>
          {checkoutItems.map((item, idx) => (
            <CheckoutProduct key={item.id || idx}>
              <ProductImg><img src={item.image} alt={item.name} /></ProductImg>
              <ProductInfo>
                <ProductCate>HAND CREAM</ProductCate>
                <ProductName>{item.name}</ProductName>
                <ProductOption>{item.option} / {item.qty}개</ProductOption>
                <ProductPrice>₩{(item.price * item.qty).toLocaleString()}</ProductPrice>
              </ProductInfo>
            </CheckoutProduct>
          ))}
          
          <CheckoutSummary>
            <ul>
              <li><span>상품 금액</span><span>₩{totalAmount.toLocaleString()}</span></li>
              <li><span>배송비</span><span>₩0</span></li>
            </ul>
            <SummaryTotal>
              <span>총 결제 금액</span>
              <strong>₩{totalAmount.toLocaleString()}</strong>
            </SummaryTotal>
          </CheckoutSummary>
        </CheckoutSection>

        <CheckoutSection>
          <SectionTitle>결제 수단</SectionTitle>
          <PayTabs>
            <button className={payMethod === 'card' ? 'is-active' : ''} onClick={() => setPayMethod('card')}>신용카드</button>
            <button className={payMethod === 'payco' ? 'is-active' : ''} onClick={() => setPayMethod('payco')}>페이코</button>
            <button className={payMethod === 'bank' ? 'is-active' : ''} onClick={() => setPayMethod('bank')}>무통장 입금</button>
          </PayTabs>
          
          <PayBox>
            {payMethod === 'card' && (
              <FormRow>
                <label>카드 선택</label>
                <FormSelect>
                  <select>
                    <option>국민카드</option>
                    <option>신한카드</option>
                    <option>현대카드</option>
                  </select>
                </FormSelect>
              </FormRow>
            )}
            {payMethod === 'payco' && <p style={{ fontSize: '12px', color: '#666' }}>페이코 앱으로 이동하여 결제를 진행합니다.</p>}
            {payMethod === 'bank' && <p style={{ fontSize: '12px', color: '#666' }}>주문 완료 후 입금 계좌번호가 안내됩니다.</p>}
          </PayBox>
        </CheckoutSection>

        <CheckoutAgree>
          <CheckboxLabel>
            <input type="checkbox" defaultChecked />
            <span>위 상품 정보 및 결제 대행 서비스 이용 약관에 모두 동의합니다. (필수)</span>
          </CheckboxLabel>
        </CheckoutAgree>

        <CheckoutAction>
          <button onClick={handlePayment}>{totalAmount.toLocaleString()}원 결제하기</button>
        </CheckoutAction>

        {showPostcode && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: '#fff', zIndex: 9999, display: 'flex', flexDirection: 'column'
          }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #ddd' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>우편번호 찾기</h2>
              <button onClick={() => setShowPostcode(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✕</button>
            </header>
            <div id="postcode-container" style={{ flex: 1, width: '100%' }}></div>
          </div>
        )}
      </CheckoutMain>
    </AppLayout>
  );
};

export default Checkout;
