import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import {IProductInCart} from '../interfaces/IProductInCart';
import {IProduct} from '../interfaces/IProduct';

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
    (product: IProduct) => {
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
        setCartProducts([...cartProducts, productToBeAdded]);
      }
    },
    [cartProducts],
  );

  const incrementProduct = useCallback(
    (productId: number) => {
      const cartProductIndex = cartProducts.findIndex(
        cartProduct => cartProduct.id === productId,
      );
      const isProductAlreadyInCart = cartProductIndex >= 0;

      if (isProductAlreadyInCart) {
        const newCartProducts = [...cartProducts];
        newCartProducts[cartProductIndex].quantity++;
        setCartProducts(newCartProducts);
        return;
      }
    },
    [cartProducts],
  );

  const decrementProduct = (productId: number) => {
    setCartProducts(currentCartProducts => {
      const cartProductIndex = currentCartProducts.findIndex(
        currentCartProduct => currentCartProduct.id === productId,
      );

      const isProductInCart = cartProductIndex >= 0;

      if (isProductInCart) {
        const newCartProducts = [...currentCartProducts];

        if (newCartProducts[cartProductIndex].quantity - 1 > 0) {
          newCartProducts[cartProductIndex].quantity--;
        } else {
          newCartProducts.splice(cartProductIndex, 1);
        }

        return newCartProducts;
      }

      return currentCartProducts;
    });
  };

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
