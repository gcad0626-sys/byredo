import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeaderContainer, 
  IconButton, 
  LogoWrapper, 
  ActionsWrapper,
  CartBadge
} from './AppHeader.styles';
import { useCart } from '../../context/CartContext';

const AppHeader: React.FC = () => {
  const { items } = useCart();
  const cartItemCount = items.reduce((sum, item) => sum + item.qty, 0);
  const [isPopping, setIsPopping] = useState(false);

  useEffect(() => {
    if (cartItemCount > 0) {
      setIsPopping(true);
      const timer = setTimeout(() => setIsPopping(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartItemCount]);

  return (
    <HeaderContainer id="home-header">
      <IconButton id="btn-menu" aria-label="메뉴 열기">
        <img src="/img/icon-menu.png" alt="menu icon" />
      </IconButton>
      
      <LogoWrapper>
        <img src="/img/logo.png" alt="BYREDO logo" />
      </LogoWrapper>
      
      <ActionsWrapper>
        <IconButton as={Link} to="/search" className="trigger-search" id="btn-search-open" aria-label="검색">
          <img src="/img/icon-search.png" alt="search icon" />
        </IconButton>
        <IconButton as={Link} to="/cart" className="trigger-cart" id="btn-cart-open" aria-label="장바구니">
          <img src="/img/icon-cart.png" alt="cart icon" />
          {cartItemCount > 0 && <CartBadge className={isPopping ? 'is-popping' : ''}>{cartItemCount}</CartBadge>}
        </IconButton>
        <IconButton as={Link} to="/mypage" className="trigger-mypage" aria-label="마이페이지">
          <img src="/img/icon-user.png" alt="user icon" />
        </IconButton>
      </ActionsWrapper>
    </HeaderContainer>
  );
};

export default AppHeader;
