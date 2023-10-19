import {IProduct} from '../interfaces/IProduct';
import {api} from './api';

export default {
  async index(): Promise<IProduct[]> {
    const response = await api.get('/');
    return response.data;
  },

  async show(id: number): Promise<IProduct> {
    const response = await api.get(`/${id}`);
    return response.data;
  },
};
