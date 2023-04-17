export type LoadPokemonStructure = {
  results: [
    {
      name: string;
      url: string;
    }
  ];
};

export type PokemonStructure = {
  id: number;
  name: string;
  sprites: { front_default: string };
  weight: number;
  height: number;
};
