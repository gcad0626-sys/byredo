import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TabBarNav, TabItem } from './BottomTabBar.styles';

const tabs = [
  { label: 'HOME', icon: '/org/img/icon-cat-all.png', path: '/' },
  { label: 'SHOP', icon: '/org/img/icon-cat-wish.png', path: '/products' },
  { label: 'ABOUT', icon: '/org/img/icon-cat-story.png', path: '/about' },
  { label: 'MY', icon: '/org/img/icon-user.png', path: '/mypage' }
];

const BottomTabBar: React.FC = () => {
  const location = useLocation();

  return (
    <TabBarNav aria-label="핵심 메뉴">
      {tabs.map((tab, index) => {
        // 경로 일치 여부 확인 (루트는 정확히 일치, 나머지는 포함 여부)
        const isActive = tab.path === '/' 
          ? location.pathname === '/' 
          : location.pathname.startsWith(tab.path);

        return (
          <TabItem 
            as={Link}
            to={tab.path}
            key={index}
            isActive={isActive}
          >
            <img src={tab.icon} alt="" />
            <span>{tab.label}</span>
          </TabItem>
        );
      })}
    </TabBarNav>
  );
};

export default BottomTabBar;
