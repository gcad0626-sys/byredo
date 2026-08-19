import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useAuth } from './AuthContext';

interface WishlistContextType {
  wishlistIds: number[];
  toggleWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);

  const getWishlistKey = () => {
    if (!user) return 'wishlist_guest';
    return `wishlist_${user.uid}`;
  };

  useEffect(() => {
    if (loading) return;
    try {
      const saved = localStorage.getItem(getWishlistKey());
      setWishlistIds(saved ? JSON.parse(saved) : []);
    } catch (e) {
      setWishlistIds([]);
    }
  }, [user, loading]);

  const saveWishlistIds = (action: number[] | ((prev: number[]) => number[])) => {
    setWishlistIds(prev => {
      const next = typeof action === 'function' ? action(prev) : action;
      if (!loading) {
        localStorage.setItem(getWishlistKey(), JSON.stringify(next));
      }
      return next;
    });
  };

  const toggleWishlist = (id: number) => {
    saveWishlistIds(prev => 
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

