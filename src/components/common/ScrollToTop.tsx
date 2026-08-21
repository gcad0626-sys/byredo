import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Desktop: Scroll the window
    window.scrollTo(0, 0);

    // Mobile: Scroll the #app-frame > main element
    const appFrame = document.getElementById('app-frame');
    if (appFrame) {
      const mainElement = appFrame.querySelector('main');
      if (mainElement) {
        mainElement.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
