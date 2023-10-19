import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import {IProduct} from '../interfaces/IProduct';

interface ProductInCart {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextProps {
  cartProducts: ProductInCart[];
  incrementProductInCart: (product: IProduct) => void;
  decrementProductInCart: (productId: number) => void;
}

const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

export const useCart = () => useContext(CartContext);

export function CartProvider({children}: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<ProductInCart[]>([]);

  const incrementProductInCart = useCallback(
    (product: IProduct) => {
      const cartProductIndex = cartProducts.findIndex(
        cartProduct => cartProduct.id === product.id,
      );
      const isProductAlreadyInCart = cartProductIndex >= 0;

      if (isProductAlreadyInCart) {
        const newCartProducts = [...cartProducts];
        newCartProducts[cartProductIndex].quantity++;
        setCartProducts(newCartProducts);
        return;
      }

      const cartProduct: ProductInCart = {
        id: product.id,
        image: product.image,
        price: product.price,
        quantity: 1,
        title: product.title,
      };
      setCartProducts([...cartProducts, cartProduct]);
      return;
    },
    [cartProducts],
  );

  const decrementProductInCart = (productId: number) => {
    setCartProducts(currentCartProducts => {
      const cartProductIndex = currentCartProducts.findIndex(
        currentCartProduct => currentCartProduct.id === productId,
      );

      const isProductInCart = cartProductIndex >= 0;

      if (isProductInCart) {
        const newCartProducts = [...currentCartProducts];

        if (newCartProducts[cartProductIndex].quantity > 0) {
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
        incrementProductInCart,
        cartProducts,
        decrementProductInCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}
