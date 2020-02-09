export interface IProduct {
  brand: string;
  img_url: string;
  friendly_name: string;
  price: number;
  discount: number;
}

interface ICommon {}

export interface IWithHome extends ICommon {}

export interface IHome extends ICommon {
  products: IProduct[];
  loading: boolean;
  fetchMoreProcucts: () => void;
}
