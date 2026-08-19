import React from 'react';
import { HeaderWrapper, HeaderInner, Logo, Nav } from './Header.styles';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo>
          <Link to="/">
            <img src="/img/logo.png" alt="BYREDO logo" />
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li><NavLink to="/products">HAND CARE</NavLink></li>
            <li><NavLink to="/about">ABOUT BYREDO</NavLink></li>
            <li><NavLink to="/login">JOIN & LOGIN</NavLink></li>
          </ul>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
