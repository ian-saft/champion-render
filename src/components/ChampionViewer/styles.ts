import styled from 'styled-components';

const ChampionViewerContainer = styled.div`
  .titles {
    width: 100%;
    margin-bottom: 2.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 0.4rem;
      font-size: 3.6rem;
    }

    h2 {
      font-size: 2.4rem;
    }
  }

  .content {
    display: flex;

    img {
      border-radius: 2.4rem;
      border: 0.8rem solid transparent;

      box-shadow: 0rem 0.8rem 1.4rem -1.2rem rgba(0, 0, 0, 0.8);
    }

    div {
      width: 36rem;
      height: 100%;
      margin: 0rem 3.6rem;
      margin-top: 0.8rem;
    }

    p {
      margin-bottom: 2.4rem;

      font-size: 1.8rem;
      color: ${({ theme }) => theme.primaryText};
    }

    button {
      width: 18rem;

      border-radius: 9rem;
      border-width: 0.4rem;

      background:${({ theme }) => theme.borderGradient};

      span {
        font-weight: 700;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.background};
      }
    }
  }

  span {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.secondary};
  }
`;

export default ChampionViewerContainer;
