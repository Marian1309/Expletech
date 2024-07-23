export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  model: string;
  description: string;
};

export type Order = '' | 'lowToHigh' | 'highToLow';
