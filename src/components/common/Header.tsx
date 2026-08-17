import React from 'react';
import { HeaderWrapper, HeaderInner, Logo, Nav } from './Header.styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo>
          <Link to="/">
            <img src="/org/img/logo.png" alt="BYREDO logo" />
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li><Link to="/products">HAND CARE</Link></li>
            <li><Link to="/about">ABOUT BYREDO</Link></li>
            <li><Link to="/login">JOIN & LOGIN</Link></li>
          </ul>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
