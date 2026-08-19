import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Carlito:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  :root {
    --header-h-desktop: 50px;
    --header-h-app: 52px;
    --tabbar-h: 60px;
    --app-frame-w: 390px;
    --app-frame-h: 800px;

    --box-line: 1px solid #e3e3de;
    --box-bg-1: #f3f3f0;
    --box-bg-2: #e9e9e4;
    --box-bg-3: #1a1a1a;

    --container-w: 1200px;

    --color-bg-page: #fafaf9;
    --color-bg-banner: #dedcd0;
    --color-ink: #1C1B1B;
    --color-ink-soft: #5D5F5E;
    --color-line: #e3e3de;

    --font-family: 'EB Garamond', 'Noto Sans KR', Arial, sans-serif;
    --font-kr: 'Noto Sans KR', Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: var(--font-family);
    background: var(--color-bg-page);
    color: var(--color-ink);
    overflow-x: hidden;
  }

  @media (min-width: 481px) {
    body.home-page {
      overflow: hidden;
    }

    /* Desktop App Frame Scrollbar Styling */
    #app-frame * {
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    #app-frame *::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    #app-frame *::-webkit-scrollbar-track {
      background: transparent;
    }

    #app-frame *::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      transition: background-color 0.3s ease;
    }

    #app-frame *:hover::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
    }

    #app-frame *::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }

    #app-frame *::-webkit-scrollbar-thumb:active {
      background-color: var(--color-ink);
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  button {
    font: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }
`;
