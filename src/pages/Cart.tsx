import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  CartMain, CartList, CartItem, CartImg, CartInfo, CartHead, CartName, CartRemove,
  CartOptionSelect, CartBottom, CartQty, CartPrice, CartGift,
  CartSummary, SummaryTitle, SummaryList, SummaryTotals, SummaryFinal,
  CartAction, CheckoutBtn
} from './Cart.styles';
import { useCart } from '../context/CartContext';

const initialItems = [
  {
    id: 1,
    name: 'BLANCHE',
    image: '/org/img/product-blanche.jpg',
    option: '30ML',
    qty: 1,
    price: 70000,
    giftMessage: '"생일 축하해! 항상 고마워."'
  },
  {
    id: 2,
    name: "BAL D'AFRIQUE",
    image: '/org/img/product-baldafrique.jpg',
    option: '50ML',
    qty: 1,
    price: 70000,
    giftMessage: null
  }
];

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, updateQty, updateOption, removeItem } = useCart();

  const handleQtyChange = (id: number, delta: number) => {
    updateQty(id, delta);
  };

  const handleRemove = (id: number) => {
    removeItem(id);
  };

  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <AppLayout>
      <AppHeader />
      {/* 장바구니 헤더는 AppHeader와 다를 수 있으나 현재는 디자인상 AppHeader로 대체하거나 커스텀 렌더 가능 */}
      <CartMain id="cart-main">
        <CartList>
          {items.map(item => (
            <CartItem key={item.id}>
              <CartImg onClick={() => navigate(`/products/${item.id}`)}>
                <img src={item.image} alt={item.name} />
              </CartImg>
              <CartInfo>
                <CartHead>
                  <CartName onClick={() => navigate(`/products/${item.id}`)}>{item.name}</CartName>
                  <CartRemove onClick={() => handleRemove(item.id)}>✕</CartRemove>
                </CartHead>
                <CartOptionSelect value={item.option} onChange={(e) => updateOption(item.id, e.target.value)}>
                  <option value="30ML">30ML</option>
                  <option value="100ML">100ML</option>
                </CartOptionSelect>
                <CartBottom>
                  <CartQty>
                    <button onClick={() => handleQtyChange(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => handleQtyChange(item.id, 1)}>+</button>
                  </CartQty>
                  <CartPrice>₩{(item.price * item.qty).toLocaleString()}</CartPrice>
                </CartBottom>
                
                {item.giftMessage ? (
                  <CartGift added>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="8" width="18" height="14" rx="2"/>
                      <path d="M12 8v14M8 8V6a2 2 0 114 0v2M12 8V6a2 2 0 114 0v2"/>
                    </svg>
                    <div>
                      <span>GIFT MESSAGE ADDED</span>
                      <p>{item.giftMessage}</p>
                    </div>
                  </CartGift>
                ) : (
                  <CartGift>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="8" width="18" height="14" rx="2"/>
                      <path d="M12 8v14M8 8V6a2 2 0 114 0v2M12 8V6a2 2 0 114 0v2"/>
                    </svg>
                    <span>ADD GIFT MESSAGE</span>
                  </CartGift>
                )}
              </CartInfo>
            </CartItem>
          ))}
        </CartList>

        <CartSummary>
          <SummaryTitle>주문 요약</SummaryTitle>
          <SummaryList>
            {items.map(item => (
              <li key={item.id}>
                <span>{item.name} ({item.qty}개)</span>
                <span>₩{(item.price * item.qty).toLocaleString()}</span>
              </li>
            ))}
          </SummaryList>
          <SummaryTotals>
            <li>
              <span>상품 금액</span>
              <span>₩{totalAmount.toLocaleString()}</span>
            </li>
            <li>
              <span>배송비</span>
              <span className="free-shipping">무료</span>
            </li>
          </SummaryTotals>
          <SummaryFinal>
            <span>총 결제 금액</span>
            <strong>₩{totalAmount.toLocaleString()}</strong>
          </SummaryFinal>
        </CartSummary>

        <CartAction>
          <CheckoutBtn onClick={() => navigate('/checkout')}>주문하기</CheckoutBtn>
        </CartAction>
      </CartMain>
    </AppLayout>
  );
};

export default Cart;
