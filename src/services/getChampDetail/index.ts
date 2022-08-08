import api from '../axios';

export interface Details {
  lore: string,
}

export default async function getChampionDetail(championID: string): Promise<Details> {
  const { data } = await api.get(`/cdn/12.6.1/data/pt_BR/champion/${championID}.json`);

  const championData = data.data[championID];

  return { lore: championData.lore };
}
