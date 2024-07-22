export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  model: string;
};

export type Order = '' | 'lowToHigh' | 'highToLow';
