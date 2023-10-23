import {IProduct} from '../interfaces/IProduct';
import {api} from './api';

export default {
  async index(category: string = ''): Promise<IProduct[]> {
    const url = category.length > 0 ? `/category/${category}` : '/';
    const response = await api.get(url);
    return response.data;
  },

  async show(id: number): Promise<IProduct> {
    const response = await api.get(`/${id}`);
    return response.data;
  },

  async indexCategories(): Promise<string[]> {
    const response = await api.get('/categories');
    return response.data;
  },
};
