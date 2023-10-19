import {IProduct} from '../interfaces/IProduct';
import {api} from './api';

export default {
  async findAll(): Promise<IProduct[]> {
    const response = await api.get('/');
    return response.data;
  },
};
