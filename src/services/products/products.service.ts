import { api } from 'services/api';
import { IProduct } from './types';

const ProductServices = {
  index: async (): Promise<IProduct[]> => {
    const { data } = await api.get<IProduct[]>('/products');
    return data;
  },
  show: async (id: string): Promise<IProduct> => {
    const { data } = await api.get<IProduct>(`/products/${id}`);
    return data;
  },
};

export { ProductServices };
