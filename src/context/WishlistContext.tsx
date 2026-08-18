import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { getStorageKey } from '../utils/storage';

interface WishlistContextType {
  wishlistIds: number[];
  toggleWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState<number[]>(() => {
    const saved = localStorage.getItem(getStorageKey('wishlist'));
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(getStorageKey('wishlist'), JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const toggleWishlist = (id: number) => {
    setWishlistIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isInWishlist = (id: number) => wishlistIds.includes(id);

  return (
    <WishlistContext.Provider value={{ wishlistIds, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
