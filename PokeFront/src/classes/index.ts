interface Stats {
  name: string;
  baseStat: number;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  baseExperience: number;
  types: string[];
  stats: Stats[];
  abilities: string[];
}
