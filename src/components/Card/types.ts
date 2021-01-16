import { IProduct } from 'services/products/types';

export interface ICard {
  product: IProduct;
  onClick?: () => void;
}
