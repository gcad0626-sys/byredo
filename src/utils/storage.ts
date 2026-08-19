import { auth } from '../firebase';

export const getUserKey = (): string => {
  const user = auth.currentUser;
  
  if (!user) {
    return 'guest';
  }
  
  return user.uid;
};

export const getStorageKey = (baseKey: string): string => {
  return `${baseKey}_${getUserKey()}`;
};

