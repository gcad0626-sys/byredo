import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: none;
  text-align: center;
  padding: 24px;
  font-family: var(--font-kr);
  font-size: 12px;
  color: #999999;
  border-top: var(--box-line);

  @media (min-width: 481px) {
    display: block;
  }
`;
