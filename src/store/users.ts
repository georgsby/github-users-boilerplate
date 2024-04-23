import { TUser } from '@/services/users/types';
import { create } from 'zustand';

type IUsersState = {
  user: TUser | null;
};

type IUsersActions = {
  actions: {
    setUser: (data: TUser) => void;
  };
};

const initialState: IUsersState = {
  user: null,
};

const useUsersStore = create<IUsersState & IUsersActions>((set) => ({
  ...initialState,
  actions: {
    setUser: (data: TUser) => set({ user: data }),
  },
}));

export { useUsersStore };
