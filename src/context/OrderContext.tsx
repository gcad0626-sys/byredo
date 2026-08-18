import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

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
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const getOrderById = (id: string) => {
    return orders.find(o => o.id === id);
  };

  const updateOrderStatus = (id: string, newStatus: string) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrderById, updateOrderStatus }}>
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
