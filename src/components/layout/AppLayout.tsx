import React, { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BrandColumn from './BrandColumn';
import BottomTabBar from './BottomTabBar';
import HamburgerMenu from './HamburgerMenu';
import { PageWrap, AppColumn, AppFrame } from './AppLayout.styles';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 메뉴 열기 이벤트를 자식 컴포넌트(AppHeader)에서 발생시킬 수 있도록 전역 상태나 Context를 쓰거나
  // 간단하게는 document 이벤트를 리스닝하는 방식 등을 사용할 수 있습니다.
  // 여기서는 가장 간단한 형태로 구현하기 위해 전역 리스너를 추가합니다.
  React.useEffect(() => {
    const handleOpenMenu = () => setIsMenuOpen(true);
    const btnMenu = document.getElementById('btn-menu');
    if (btnMenu) {
      btnMenu.addEventListener('click', handleOpenMenu);
    }
    return () => {
      if (btnMenu) btnMenu.removeEventListener('click', handleOpenMenu);
    };
  }, []);

  return (
    <>
      <Header />
      <PageWrap>
        {/* 데코 이미지들 - 데스크탑 전용 */}
        <img src="/org/img/gift.png" alt="" className="page-deco page-deco--gift" data-scope="desktop-only" />
        <img src="/org/img/three.png" alt="" className="page-deco page-deco--three" data-scope="desktop-only" />
        <img src="/org/img/center.png" alt="" className="page-deco page-deco--center" data-scope="desktop-only" />

        {/* 좌측: 앱 프레임 */}
        <AppColumn>
          <AppFrame id="app-frame" data-scope="app-shared">
            {children}
            <BottomTabBar />
            <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          </AppFrame>
        </AppColumn>

        {/* 우측: 브랜드 소개 패널 (데스크탑 전용) */}
        <BrandColumn />
      </PageWrap>
      <Footer />
    </>
  );
};

export default AppLayout;
