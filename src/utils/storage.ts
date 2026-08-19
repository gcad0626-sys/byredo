import { auth } from '../firebase';

export const getUserKey = (): string => {
  const user = auth.currentUser;
  
  if (!user) {
    return 'guest';
  }
  
  const provider = user.providerData?.[0]?.providerId === 'google.com' ? 'google' : 
                   user.providerData?.[0]?.providerId === 'apple.com' ? 'apple' : 'email';
  const userName = user.email || user.displayName || user.uid;
  
  // Create a safe key without spaces or special characters if needed, 
  // but standard encodeURIComponent is safe.
  return `${provider}_${encodeURIComponent(userName)}`;
};

export const getStorageKey = (baseKey: string): string => {
  return `${baseKey}_${getUserKey()}`;
};

