import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { clearChampion } from '../../redux/championSlice';
import getChampionDetail, { Details } from '../../services/getChampDetail';
import createUrl from '../../utils/createUrl';

import ChampionViewerContainer from './styles';

import State from '../../types/State';

const ChampionViewer: FC = () => {
  const [championDetails, setChampionDetails] = useState<Details>();
  const { champion } = useSelector<any, State>((state) => state.champion);
  const dispatch = useDispatch();

  const url = createUrl(champion.id);

  function handleClear() {
    dispatch(clearChampion());
  }

  useEffect(() => {
    if (champion.id) {
      getChampionDetail(champion.id).then((details) => {
        setChampionDetails(details);
      });
    } else {
      setChampionDetails(undefined);
    }
  }, [champion]);

  return (
    <ChampionViewerContainer>
      <div className="titles">
        <h1>{ champion.name }</h1>
        <h2>{ champion.title }</h2>
      </div>
      { champion.id && championDetails ? (
        <div className="content">
          <img src={url} alt="champ" />
          <div>
            <p>{championDetails.lore}</p>
            <Button
              variant="contained"
              onClick={() => { handleClear(); }}
            >
              <span>FECHAR</span>
            </Button>
          </div>
        </div>
      ) : (
        <span><i>Nenhum Campeão Selecionado</i></span>
      )}
    </ChampionViewerContainer>
  );
};

export default ChampionViewer;
