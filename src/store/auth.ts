import { create } from 'zustand';

type IAppState = {
  isAuthenticated: boolean;
  isAppCanStart: boolean;
};

type IAppActions = {
  actions: {
    startWithoutToken: () => void;
    setIsAuthUser: () => void;
  };
};

const initialState: IAppState = {
  isAuthenticated: false,
  isAppCanStart: false,
};

const useAppStore = create<IAppState & IAppActions>((set) => ({
  ...initialState,
  actions: {
    startWithoutToken: () => set({ isAppCanStart: true }),
    setIsAuthUser: () =>
      set({
        isAuthenticated: true,
        isAppCanStart: true,
      }),
  },
}));

export { useAppStore };
