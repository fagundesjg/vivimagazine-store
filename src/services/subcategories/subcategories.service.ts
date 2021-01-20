import { api } from 'services/api';
import { ISubCategory } from 'services/products/types';

const SubCategoryServices = {
  index: async (): Promise<ISubCategory[]> => {
    const { data } = await api.get<ISubCategory[]>('/subcategories');
    return data;
  },
  show: async (id: string): Promise<ISubCategory> => {
    const { data } = await api.get<ISubCategory>(`/subcategories/${id}`);
    return data;
  },
};

export { SubCategoryServices };
