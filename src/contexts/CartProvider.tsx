import React from 'react';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {IProductInCart} from '../interfaces/IProductInCart';
import {IProduct} from '../interfaces/IProduct';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartContextProps {
  cartProducts: IProductInCart[];
  addProduct: (product: IProduct) => void;
  incrementProduct: (productId: number) => void;
  decrementProduct: (productId: number) => void;
}

const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

export const useCart = () => useContext(CartContext);

export function CartProvider({children}: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<IProductInCart[]>([]);

  const addProduct = useCallback(
    async (product: IProduct) => {
      const cartProductIndex = cartProducts.findIndex(
        cartProduct => cartProduct.id === product.id,
      );
      const isProductAlreadyInCart = cartProductIndex >= 0;

      if (!isProductAlreadyInCart) {
        const productToBeAdded: IProductInCart = {
          id: product.id,
          image: product.image,
          price: product.price,
          title: product.title,
          quantity: 1,
        };
        const newCartProducts = [...cartProducts, productToBeAdded];
        setCartProducts(newCartProducts);
        const stringifiedValue = JSON.stringify(newCartProducts);
        await AsyncStorage.setItem(
          '@product_store:cart_products_1.0.0',
          stringifiedValue,
        );
      }
    },
    [cartProducts],
  );

  const incrementProduct = useCallback(
    async (productId: number) => {
      const cartProductIndex = cartProducts.findIndex(
        cartProduct => cartProduct.id === productId,
      );
      const isProductAlreadyInCart = cartProductIndex >= 0;

      if (isProductAlreadyInCart) {
        const newCartProducts = [...cartProducts];
        newCartProducts[cartProductIndex].quantity++;
        setCartProducts(newCartProducts);
        const stringifiedValue = JSON.stringify(newCartProducts);
        await AsyncStorage.setItem(
          '@product_store:cart_products_1.0.0',
          stringifiedValue,
        );
      }
    },
    [cartProducts],
  );

  const decrementProduct = useCallback(
    async (productId: number) => {
      const cartProductIndex = cartProducts.findIndex(
        currentCartProduct => currentCartProduct.id === productId,
      );

      const isProductInCart = cartProductIndex >= 0;

      if (isProductInCart) {
        const newCartProducts = [...cartProducts];

        if (newCartProducts[cartProductIndex].quantity - 1 > 0) {
          newCartProducts[cartProductIndex].quantity--;
        } else {
          newCartProducts.splice(cartProductIndex, 1);
        }
        const stringifiedValue = JSON.stringify(newCartProducts);
        await AsyncStorage.setItem(
          '@product_store:cart_products_1.0.0',
          stringifiedValue,
        );
        setCartProducts(newCartProducts);
      }
    },
    [cartProducts],
  );

  useEffect(() => {
    const init = async () => {
      const value = await AsyncStorage.getItem(
        '@product_store:cart_products_1.0.0',
      );
      if (value !== null) {
        setCartProducts(JSON.parse(value) as IProductInCart[]);
      }
    };
    init();
  }, []);

  return (
    <CartContext.Provider
      value={{
        addProduct,
        cartProducts,
        decrementProduct,
        incrementProduct,
      }}>
      {children}
    </CartContext.Provider>
  );
}
