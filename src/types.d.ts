export type Character = {
  id: number;
  name: string;
  image:string
  status: string;
  species: string;
};

export type Data = {
  results: Character[];
};
