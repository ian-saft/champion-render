import api from '../axios';
import capitalizeString from '../../utils/capitalizeString';

import Champion from '../../types/Champion';

interface GetChampionsResponse {
  champions: Champion[],
}

export default async function getChampions(): Promise<GetChampionsResponse> {
  const { data: championsData } = await api.get('/cdn/12.6.1/data/pt_BR/champion.json');

  const championsObject = championsData.data;

  const keys = Object.keys(championsObject);

  const championsList = keys.map((k) => championsObject[k]);

  const champions: Champion[] = championsList.map((c) => ({
    id: c.id,
    name: c.name,
    title: capitalizeString(c.title),
  }));

  return { champions };
}
