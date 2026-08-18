import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Overlay, 
  Header, 
  Title, 
  CloseBtn, 
  MenuList, 
  MenuIcon, 
  Footer, 
  LoginLink, 
  LogoWrapper 
} from './HamburgerMenu.styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Overlay className="hamburger-menu" id="hamburger-menu" aria-label="전체 메뉴" isOpen={isOpen}>
      <Header>
        <Title>MENU</Title>
        <CloseBtn id="btn-menu-close" aria-label="메뉴 닫기" onClick={onClose}>✕</CloseBtn>
      </Header>
      
      <MenuList>
        <li>
          <Link to="/products" onClick={onClose}>
            <MenuIcon src="/img/icon-cat-all.png" alt="" />
            <span>All Products</span>
          </Link>
        </li>
        <li>
          <Link to="/quiz" onClick={onClose}>
            <MenuIcon src="/img/icon-cat-scent.png" alt="" />
            <span>Scent Finder</span>
          </Link>
        </li>
        <li>
          <Link to="/wishlist" onClick={onClose}>
            <MenuIcon src="/img/icon-cat-wish.png" alt="" />
            <span>Wish List</span>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={onClose}>
            <MenuIcon src="/img/icon-cat-story.png" alt="" />
            <span>Brand Story</span>
          </Link>
        </li>
      </MenuList>
      
      <Footer>
        <LoginLink as={Link} to="/login" onClick={onClose}>
          Login / Join <span className="arrow">→</span>
        </LoginLink>
        <LogoWrapper>
          <img src="/img/logo.png" alt="BYREDO" />
        </LogoWrapper>
      </Footer>
    </Overlay>
  );
};

export default HamburgerMenu;
