import {IProduct} from '../../src/interfaces/IProduct';
import {IProductInCart} from '../../src/interfaces/IProductInCart';

export const cartProductInfo: IProductInCart = {
  id: 1,
  title: 'title',
  price: 10.5,
  image: 'image_url',
  quantity: 1,
};

export const productInfo: IProduct = {
  id: 1,
  title: 'title',
  price: 10.5,
  description: 'A single description',
  category: 'category',
  image: 'image_url',
  rating: {
    rate: 5,
    count: 200,
  },
};

export const productInfoList: IProduct[] = [
  {
    id: 1,
    title: 'title 1',
    price: 10.5,
    description: 'A single description',
    category: 'category',
    image: 'image_url',
    rating: {
      rate: 5,
      count: 200,
    },
  },
  {
    id: 2,
    title: 'title 2',
    price: 12.3,
    description: 'A single description 2',
    category: 'category 2',
    image: 'image_url_2',
    rating: {
      rate: 0,
      count: 0,
    },
  },
];

export const categories = ['category', 'category_2', 'category_3'];
