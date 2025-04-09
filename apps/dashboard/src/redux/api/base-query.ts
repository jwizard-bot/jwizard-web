import config from '@/config';
import i18n from '@/i18n';
import { RootState } from '@/redux';
import { mainSlice } from '@/redux/slice/main-slice';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
  baseUrl: config.apiUrl,
  credentials: 'include',
  prepareHeaders: (headers: Headers, { getState }) => {
    const state = getState() as RootState;
    const csrf = state[mainSlice.reducerPath].csrf;
    if (csrf) {
      headers.set(csrf.headerName, csrf.csrfToken);
    }
    const language = i18n.language;
    if (language) {
      headers.set('Accept-Language', language);
    }
  },
});

export { baseQuery };
