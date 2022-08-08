import styled from 'styled-components';

export interface ContainerProps {
  active?: boolean,
}

const ChampionCardContainer = styled.button<ContainerProps>`
  width: 9.6rem;
  height: 9.6rem;
  padding: 0.4rem;
  margin-right: 1.2rem;
  margin-bottom: 2.4rem;
  position: relative;

  border-radius: 1.4rem;
  border: none;
  background: ${({ active, theme }) => (active ? theme.borderGradient : 'transparent')};

  box-shadow: 0rem 0.4rem 1.2rem -0.8rem rgba(0, 0, 0, 0.8);

  cursor: pointer;

  img {
    width: 100%;
    border-radius: 1rem;
    filter: grayscale(${({ active }) => (active ? 1 : 0)})
  }

  span {
    font-weight: 500;
  }

  :hover {
    background: ${({ theme }) => theme.borderGradient};
  }

  .icon {
    font-size: 7.2rem;
    position: absolute;
    bottom: calc(50% - 3.6rem);
    right: calc(50% - 3.6rem);

    color: ${({ theme }) => theme.primaryText};
    background: ${({ theme }) => theme.borderGradient};

    background: ${({ theme }) => theme.borderGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default ChampionCardContainer;
