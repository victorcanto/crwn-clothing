import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 50em) {
    width: 80%;

    button {
      margin: 0 auto;
      width: 100%;
    }
  }
`;
