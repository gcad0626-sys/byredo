import styled, { keyframes } from 'styled-components';

const floatDeco = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

export const PageWrap = styled.div`
  display: block;
  width: 100%;
  padding: 0;

  @media (min-width: 481px) {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 40px;
    max-width: var(--container-w);
    margin: 0;
    left: 50vw;
    transform: translateX(-50%);
    padding: calc(var(--header-h-desktop) + 40px) 24px 40px;
    height: 100vh;
    height: 100dvh;
  }

  /* 데스크탑 배경 장식 이미지 */
  .page-deco {
    display: none;
    
    @media (min-width: 481px) {
      display: block;
      position: absolute;
      z-index: 0;
      pointer-events: none;
    }
  }

  .page-deco--gift {
    top: 0px;
    left: -170px;
    width: 400px;
    opacity: 0.9;
    animation: ${floatDeco} 3.5s ease-in-out infinite;
  }

  .page-deco--three {
    bottom: -20px;
    left: -100px;
    width: 300px;
    animation: ${floatDeco} 4.5s ease-in-out infinite;
  }

  .page-deco--center {
    top: 50%;
    left: calc(60% - 4px);
    width: 180px;
    z-index: 0;
    /* center.png already has a transform so we need to combine them */
    animation: floatCenter 4s ease-in-out infinite;
  }

  @keyframes floatCenter {
    0% { transform: translate(-90%, -50%) translateY(0px); }
    50% { transform: translate(-90%, -50%) translateY(-15px); }
    100% { transform: translate(-90%, -50%) translateY(0px); }
  }
`;

export const AppColumn = styled.div`
  width: 100%;
  display: block;

  @media (min-width: 481px) {
    flex: 0 0 calc(60% - 24px);
    max-width: calc(60% - 24px);
    display: flex;
    justify-content: center;
    height: 100%;
  }
`;

export const AppFrame = styled.div`
  width: 100%;
  height: 100dvh;
  border: none;
  border-radius: 0;
  box-shadow: none;
  overflow: visible; /* Ensure fixed tab bar is not hidden on mobile */
  display: flex;
  flex-direction: column;
  background: #fafaf9;

  @media (min-width: 481px) {
    position: relative;
    z-index: 10;
    width: var(--app-frame-w);
    min-width: var(--app-frame-w);
    height: 100%;
    min-height: auto;
    border: none;
    border-radius: 14px;
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
    overflow: hidden; /* Desktop specific overflow */
    flex: 0 0 var(--app-frame-w);
    transform: translateZ(0); /* Contain position: fixed elements inside frame */
  }
`;
