import React, { useEffect, useState } from 'react';

import getChampions from '../../services/getChampions';

import ChampionSelector from '../../components/ChampionSelector';
import ChampionViewer from '../../components/ChampionViewer';

import Champion from '../../types/Champion';

import HomeContainer from './styles';

export default function Home() {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    getChampions().then(({ champions: ChampionsData }) => {
      setChampions(ChampionsData);
    });
  }, []);

  return (
    <HomeContainer>
      <aside>
        <header>
          <h1>Selecione Seu Campeão</h1>
        </header>
        <ChampionSelector champions={champions} />
      </aside>
      <main>
        <header>
          <h1>Campeão Selecionado</h1>
        </header>
        <ChampionViewer />
      </main>
    </HomeContainer>
  );
}
