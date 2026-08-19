import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useAuth } from './AuthContext';

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
  const { user, loading } = useAuth();
  const [items, setItems] = useState<CartItemType[]>([]);

  const getCartKey = () => {
    if (!user) return 'cartItems_guest';
    const provider = user.providerData?.[0]?.providerId === 'google.com' ? 'google' : 
                     user.providerData?.[0]?.providerId === 'apple.com' ? 'apple' : 'email';
    const userName = user.email || user.displayName || user.uid;
    return `cartItems_${provider}_${encodeURIComponent(userName)}`;
  };

  useEffect(() => {
    if (loading) return;
    try {
      const saved = localStorage.getItem(getCartKey());
      setItems(saved ? JSON.parse(saved) : []);
    } catch (e) {
      setItems([]);
    }
  }, [user, loading]);

  useEffect(() => {
    if (loading) return;
    localStorage.setItem(getCartKey(), JSON.stringify(items));
  }, [items, user, loading]);

  const addToCart = (newItem: Omit<CartItemType, 'id'>) => {
    setItems(prevItems => {
      const existing = prevItems.find(i => i.productId === newItem.productId && i.option === newItem.option && i.giftMessage === newItem.giftMessage);
      if (existing) {
        return prevItems.map(i => i.id === existing.id ? { ...i, qty: i.qty + newItem.qty } : i);
      } else {
        const newId = Date.now();
        return [...prevItems, { ...newItem, id: newId }];
      }
    });
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

