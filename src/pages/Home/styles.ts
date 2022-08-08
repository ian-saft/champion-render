import styled from 'styled-components';

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  padding: 3.6rem;

  display: flex;

  header {
    padding: 1.8rem 4.8rem;
    margin-bottom: 1.8rem;

    text-align: center;

    border-radius: 2.4rem;

    background: ${({ theme }) => theme.backgroundGradient};
    box-shadow: 0rem 0.8rem 1.4rem -1.2rem rgba(0, 0, 0, 0.8);

    h1 {
      font-size: 3.6rem;
      font-weight: 700;
      color: ${({ theme }) => theme.primaryText};

      background: ${({ theme }) => theme.borderGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  aside, main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  aside {
    width: 40%;
  }

  main {
    width: 60%;
  }
`;

export default HomeContainer;
