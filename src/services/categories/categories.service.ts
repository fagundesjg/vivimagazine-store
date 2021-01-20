import { api } from 'services/api';
import { ICategory } from 'services/products/types';

const CategoryServices = {
  index: async (): Promise<ICategory[]> => {
    const { data } = await api.get<ICategory[]>('/categories');
    return data;
  },
  show: async (id: string): Promise<ICategory> => {
    const { data } = await api.get<ICategory>(`/categories/${id}`);
    return data;
  },
};

export { CategoryServices };
