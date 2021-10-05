import { atom } from 'recoil';

export const userSessionState = atom({
  key: 'userSessionState',
  default: {
    isAuthenticated: false,
    rol: '',
  },
});
