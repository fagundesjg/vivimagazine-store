export interface IDetails {
  id: string;
}

export interface IProductInfo {
  id: string;
  photos: string[];
  brand: string;
  name: string;
  description: string;
  quant: number;
  price: number;
  discount: number;
  max_parcels: number;
}
