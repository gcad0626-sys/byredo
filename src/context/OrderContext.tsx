import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface OrderItem {
  id: number | string;
  name: string;
  image: string;
  option: string;
  qty: number;
  price: number;
}

export interface ShippingInfo {
  name: string;
  phone: string;
  address: string;
  memo: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: string;
  items: OrderItem[];
  totalAmount: number;
  shippingInfo: ShippingInfo;
  paymentMethod: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  getOrderById: (id: string) => Order | undefined;
  updateOrderStatus: (id: string, newStatus: string) => void;
  deleteOrder: (id: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  const getOrdersKey = () => {
    if (!user) return 'orders_guest';
    return `orders_${user.uid}`;
  };

  useEffect(() => {
    if (loading) return;
    try {
      const saved = localStorage.getItem(getOrdersKey());
      setOrders(saved ? JSON.parse(saved) : []);
    } catch (e) {
      setOrders([]);
    }
  }, [user, loading]);

  const saveOrders = (action: Order[] | ((prev: Order[]) => Order[])) => {
    setOrders(prev => {
      const next = typeof action === 'function' ? action(prev) : action;
      if (!loading) {
        localStorage.setItem(getOrdersKey(), JSON.stringify(next));
      }
      return next;
    });
  };

  const addOrder = (order: Order) => {
    saveOrders(prev => [order, ...prev]);
  };

  const getOrderById = (id: string) => {
    return orders.find(o => o.id === id);
  };

  const updateOrderStatus = (id: string, newStatus: string) => {
    saveOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const deleteOrder = (id: string) => {
    saveOrders(prev => prev.filter(o => o.id !== id));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrderById, updateOrderStatus, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

