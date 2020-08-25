import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from 'react';

import { formatValue, CapitalizePokemonName } from '../utils/formatValue';

interface IPokemonProduct {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  quantity: number;
  priceFormatted: string;
}

// all properties that my context have
interface ICartContext {
  products: IPokemonProduct[];
  addToCart(item: Omit<IPokemonProduct, 'quantity' | 'priceFormatted'>): void;
  increment(id: number): void;
  decrement(id: number): void;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IPokemonProduct[]>([]);

  // loads products when the component mount
  useEffect(() => {
    function loadProduct() {
      const product = localStorage.getItem('@PokeStore:products');

      if (product) {
        setProducts([...JSON.parse(product)]);
      }
    }
    loadProduct();
  }, []);

  const addToCart = useCallback(
    product => {
      let newArrayOfProduct;
      const productExists = products.find(prod => prod.id === product.id);

      if (productExists) {
        newArrayOfProduct = products.map(prod => {
          if (prod.id === product.id) {
            return {
              ...prod,
              name: CapitalizePokemonName(prod.name),
              quantity: prod.quantity + 1,
              priceFormatted: formatValue(prod.weight),
            };
          }
          return {
            ...prod,
          };
        });
        setProducts(newArrayOfProduct);
      } else {
        newArrayOfProduct = [
          ...products,
          {
            ...product,
            name: CapitalizePokemonName(product.name),
            quantity: 1,
            priceFormatted: formatValue(product.weight),
          },
        ];
        setProducts(newArrayOfProduct);
      }
      localStorage.setItem(
        '@PokeStore:products',
        JSON.stringify(newArrayOfProduct),
      );
    },

    [products],
  );

  const increment = useCallback(
    id => {
      const newProducts = products.map(prod => {
        if (prod.id === id) {
          return {
            ...prod,
            quantity: prod.quantity + 1,
          };
        }
        return prod;
      });

      setProducts(newProducts);

      localStorage.setItem('@PokeStore:products', JSON.stringify(newProducts));
    },
    [products],
  );

  const decrement = useCallback(
    id => {
      const newProducts = products.map(product => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }

        return product;
      });

      // remover do carrinho caso diminua quantidade até 0
      newProducts.forEach((product, index) => {
        if (product.id === id && product.quantity === 0) {
          newProducts.splice(index, 1);
        }
        return product;
      });

      setProducts(newProducts);

      localStorage.setItem('@PokeStore:products', JSON.stringify(newProducts));
    },
    [products],
  );

  return (
    <CartContext.Provider value={{ products, addToCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart(): ICartContext {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
