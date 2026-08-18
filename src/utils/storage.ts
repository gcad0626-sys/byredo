export const getUserKey = (): string => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    return 'guest';
  }
  
  const provider = localStorage.getItem('loginProvider') || 'email';
  const userName = localStorage.getItem('userName') || 'unknown';
  
  // Create a safe key without spaces or special characters if needed, 
  // but standard encodeURIComponent is safe.
  return `${provider}_${encodeURIComponent(userName)}`;
};

export const getStorageKey = (baseKey: string): string => {
  return `${baseKey}_${getUserKey()}`;
};
