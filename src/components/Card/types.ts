import { IProduct } from '../../pages/Home/types';

export interface ICard {
  product: IProduct;
  onClick?: () => void;
}
