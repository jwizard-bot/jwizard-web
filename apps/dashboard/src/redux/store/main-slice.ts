import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { CsrfResDto } from '@/redux/api/session/type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  loggedIn: boolean;
  initialized: boolean;
  csrf: CsrfResDto | null;
};

const initialState: InitialState = {
  loggedIn: false,
  initialized: false,
  csrf: null,
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setCsrf: (state, action: PayloadAction<CsrfResDto | null>) => {
      state.csrf = action.payload;
    },
  },
});

const { setLoggedIn, setCsrf, setInitialized } = mainSlice.actions;

const useMainSlice = () => useSelector((state: RootState) => state[mainSlice.reducerPath]);

export { mainSlice, useMainSlice, setLoggedIn, setCsrf, setInitialized };
