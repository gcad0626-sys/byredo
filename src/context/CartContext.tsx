import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItemType {
  id: number;
  productId: number;
  name: string;
  image: string;
  option: string;
  qty: number;
  price: number;
  giftMessage: string | null;
}

interface CartContextType {
  items: CartItemType[];
  addToCart: (item: Omit<CartItemType, 'id'>) => void;
  updateQty: (id: number, delta: number) => void;
  updateOption: (id: number, option: string) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItemType[]>(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });
  const [nextId, setNextId] = useState(() => {
    const saved = localStorage.getItem('cartNextId');
    return saved ? JSON.parse(saved) : 1;
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('cartNextId', JSON.stringify(nextId));
  }, [nextId]);

  const addToCart = (newItem: Omit<CartItemType, 'id'>) => {
    // Check if exactly same product and option exists
    const existing = items.find(i => i.productId === newItem.productId && i.option === newItem.option && i.giftMessage === newItem.giftMessage);
    if (existing) {
      setItems(items.map(i => i.id === existing.id ? { ...i, qty: i.qty + newItem.qty } : i));
    } else {
      setItems([...items, { ...newItem, id: nextId }]);
      setNextId(nextId + 1);
    }
  };

  const updateQty = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, qty: Math.max(1, item.qty + delta) };
      }
      return item;
    }));
  };

  const updateOption = (id: number, option: string) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newPrice = option === '100ML' ? 98000 : 70000;
        return { ...item, option, price: newPrice };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, updateQty, updateOption, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
