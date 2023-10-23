import {productInfoList} from '../../tests/mock/product';
import ProductService from './ProductService';
import {api} from './api';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Service: ProductService', () => {
  describe('Method: index', () => {
    it('should return a list of products', async () => {
      jest.spyOn(api, 'get').mockResolvedValue({data: productInfoList});
      const productList = await ProductService.index();

      expect(productList.length).toBe(2);
      expect(productList[0].title).toBe('title 1');
      expect(productList[1].title).toBe('title 2');
    });
  });

  describe('Method: show', () => {
    it('should return a list of products', async () => {
      jest.spyOn(api, 'get').mockResolvedValue({data: productInfoList[0]});
      const product = await ProductService.show(productInfoList[0].id);

      expect(product).toEqual(productInfoList[0]);
    });
  });
});
