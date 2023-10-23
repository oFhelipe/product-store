import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoritesContextProps {
  ids: number[];
  favoriteProduct: (id: number) => void;
  unFavoriteProduct: (id: number) => void;
}

const FavoritesContext = createContext({} as FavoritesContextProps);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const useFavorites = () => useContext(FavoritesContext);

export function FavoritesProvider({children}: FavoritesProviderProps) {
  const [ids, setIds] = useState<number[]>([]);

  const favoriteProduct = useCallback(
    async (id: number) => {
      if (!ids.includes(id)) {
        const newIds = [...ids, id];
        setIds(newIds);
        const stringifiedValue = JSON.stringify(newIds);
        await AsyncStorage.setItem(
          '@product_store:favorite_products_1.0.0',
          stringifiedValue,
        );
      }
    },
    [ids],
  );

  const unFavoriteProduct = useCallback(
    async (id: number) => {
      if (ids.includes(id)) {
        const newIds = ids.filter(favoritedId => favoritedId !== id);
        setIds(newIds);
        const stringifiedValue = JSON.stringify(newIds);
        await AsyncStorage.setItem(
          '@product_store:favorite_products_1.0.0',
          stringifiedValue,
        );
      }
    },
    [ids],
  );

  useEffect(() => {
    const init = async () => {
      const value = await AsyncStorage.getItem(
        '@product_store:favorite_products_1.0.0',
      );
      if (value !== null) {
        setIds(JSON.parse(value) as number[]);
      }
    };
    init();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        ids,
        favoriteProduct,
        unFavoriteProduct,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
}
