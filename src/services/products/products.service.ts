import { api } from 'services/api';
import { IPaginateProps, IPagination } from 'services/types';
import { getBodyFormData } from 'utils';
import { IProduct } from './types';

const ProductServices = {
  index: async (payload?: IPaginateProps): Promise<IPagination<IProduct>> => {
    const { data } = await api.get<IPagination<IProduct>>(
      `/products?${getBodyFormData(payload ?? {})}`
    );
    return data;
  },
  show: async (id: string): Promise<IProduct> => {
    const { data } = await api.get<IProduct>(`/products/${id}`);
    return data;
  },
};

export { ProductServices };
