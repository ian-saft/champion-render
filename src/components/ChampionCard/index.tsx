import React, { FC, HTMLAttributes } from 'react';
import { Icon } from '@material-ui/core';

import createUrl from '../../utils/createUrl';

import Champion from '../../types/Champion';

import ChampionCardContainer, { ContainerProps } from './styles';

interface ChampionCardProps extends HTMLAttributes<HTMLButtonElement>, ContainerProps {
  champion: Champion,
}

const ChampionCard: FC<ChampionCardProps> = ({ champion, active, ...props }) => {
  const { id, name } = champion;

  const url = createUrl(id, { square: true });

  return (
    <ChampionCardContainer
      active={active}
      {...props}
    >
      <img
        src={url}
        alt="champ"
      />
      {active && (
        <Icon className="icon">check_circle_outline</Icon>
      )}
      <span>{ name }</span>
    </ChampionCardContainer>
  );
};

export default ChampionCard;
