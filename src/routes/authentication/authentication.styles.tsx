import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;

  @media screen and (max-width: 50em) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
