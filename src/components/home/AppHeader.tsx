import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeaderContainer, 
  IconButton, 
  LogoWrapper, 
  ActionsWrapper, 
  CartBadge 
} from './AppHeader.styles';

const AppHeader: React.FC = () => {
  return (
    <HeaderContainer id="home-header">
      <IconButton id="btn-menu" aria-label="메뉴 열기">
        <img src="/org/img/icon-menu.png" alt="menu icon" />
      </IconButton>
      
      <LogoWrapper>
        <img src="/org/img/logo.png" alt="BYREDO logo" />
      </LogoWrapper>
      
      <ActionsWrapper>
        <IconButton as={Link} to="/search" className="trigger-search" id="btn-search-open" aria-label="검색">
          <img src="/org/img/icon-search.png" alt="search icon" />
        </IconButton>
        <IconButton as={Link} to="/cart" className="trigger-cart" id="btn-cart-open" aria-label="장바구니">
          <img src="/org/img/icon-cart.png" alt="cart icon" />
        </IconButton>
        <IconButton as={Link} to="/mypage" className="trigger-mypage" aria-label="마이페이지">
          <img src="/org/img/icon-user.png" alt="user icon" />
        </IconButton>
      </ActionsWrapper>
    </HeaderContainer>
  );
};

export default AppHeader;
