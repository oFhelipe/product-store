import {categories, productInfo} from '../../tests/mock/product';
import {serviceGetMock} from '../../tests/mock/services';
import ProductService from './ProductService';
import {api} from './api';

beforeAll(() => {
  jest.spyOn(api, 'get').mockImplementation(serviceGetMock);
});

afterAll(() => {
  jest.clearAllMocks();
});

describe('Service: ProductService', () => {
  describe('Method: index', () => {
    it('should return a list of products', async () => {
      const productList = await ProductService.index();

      expect(productList.length).toBe(2);
      expect(productList[0].title).toBe('title 1');
      expect(productList[1].title).toBe('title 2');
    });

    it('should return a list of products of a specific category', async () => {
      const products = await ProductService.index('category');

      expect(products.length).toBe(1);
      expect(products[0].category).toEqual('category');
    });

    it('should return a empty list of products if a specific category does not exist', async () => {
      const products = await ProductService.index('not-existing-caregory');
      expect(products.length).toBe(0);
    });
  });

  describe('Method: show', () => {
    it('should return a list of products', async () => {
      const product = await ProductService.show(productInfo.id);

      expect(product).toEqual(productInfo);
    });
  });

  describe('Method: indexCategories', () => {
    it('should return a list of categories', async () => {
      const categoriesResopnse = await ProductService.indexCategories();

      expect(categoriesResopnse).toEqual(categories);
    });
  });
});
