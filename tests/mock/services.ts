import {categories, productInfo, productInfoList} from './product';

export function serviceGetMock(url: string) {
  if (url === '/categories') {
    return Promise.resolve({data: categories});
  }

  if (url === '/') {
    return Promise.resolve({data: productInfoList});
  }

  if (url.includes('/category/')) {
    const category = url.split('/category/')[1];
    return Promise.resolve({
      data: productInfoList.filter(p => p.category === category),
    });
  }

  return Promise.resolve({data: productInfo});
}
