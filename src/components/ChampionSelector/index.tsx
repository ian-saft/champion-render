import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';

import { changeChampion } from '../../redux/championSlice';
import capitalizeString from '../../utils/capitalizeString';

import ChampionCard from '../ChampionCard';

import ChampionSelectorContainer from './styles';

import Champion from '../../types/Champion';
import State from '../../types/State';

interface ChampionCardProps {
  champions: Champion[],
}

const ChampionSelector: FC<ChampionCardProps> = ({ champions }) => {
  const { activeChampion } = useSelector<any, State>((state) => state.champion);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  function handleSelect(name: string) {
    const champion = champions.find((c) => c.name === name);

    dispatch(changeChampion(champion));
  }

  const filteredChampions = search.length > 0
    ? champions.filter((c) => c.name.includes(capitalizeString(search.toLowerCase())))
    : champions;

  return (
    <ChampionSelectorContainer>
      <TextField
        variant="outlined"
        placeholder="Pesquise pelo seu campeão"
        className="searchBar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div>
        { filteredChampions.map((c) => (
          <ChampionCard
            key={c.name}
            champion={c}
            active={c.name === activeChampion}
            onClick={() => { handleSelect(c.name); }}
          />
        ))}
      </div>
    </ChampionSelectorContainer>
  );
};

export default ChampionSelector;
