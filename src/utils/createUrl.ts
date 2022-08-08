const defaultOptions = {
  square: false,
};

export default function createUrl(championID: string, options = defaultOptions): string {
  if (options.square) return `http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${championID}.png`;

  return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championID}_0.jpg`;
}
