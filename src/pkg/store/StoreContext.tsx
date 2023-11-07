// storeContext.tsx
import React from 'react';
import RootStore from './RootStore.ts';

export const StoreContext = React.createContext(RootStore);

export const useStores = () => React.useContext(StoreContext);
