import { createApi } from '@reduxjs/toolkit/query/react';
import greenBTCLazyBaseQuery from './greenBTCLazyBaseQuery';

export const baseQuery = greenBTCLazyBaseQuery({});

export default createApi({
  reducerPath: 'twoApi',
  baseQuery,
  endpoints: () => ({}),
});
