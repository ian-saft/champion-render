import styled from 'styled-components';

const ChampionSelectorContainer = styled.div`
  margin: 0rem 2.4rem;
  margin-right: 1.2rem;
  text-align: center;

  overflow-y: scroll;

  .searchBar {
    width: 48rem;
    margin-top: 0.4rem;
    margin-bottom: 1.8rem;

    div {
      border-radius: 1.2rem;
    }

    input {
      font-size: 1.8rem;
      border-radius: 1.2rem;
    }

    fieldset {
      border-color: ${({ theme }) => theme.secondary};
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 0.2rem solid ${({ theme }) => theme.primary};
    }
  }
`;

export default ChampionSelectorContainer;
