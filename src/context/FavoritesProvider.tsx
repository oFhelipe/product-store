import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

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
    (id: number) => {
      if (!ids.includes(id)) {
        setIds([...ids, id]);
      }
    },
    [ids],
  );

  const unFavoriteProduct = useCallback(
    (id: number) => {
      if (ids.includes(id)) {
        const newIds = ids.filter(favoritedId => favoritedId !== id);
        setIds(newIds);
      }
    },
    [ids],
  );

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
