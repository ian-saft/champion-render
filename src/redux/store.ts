import { configureStore } from '@reduxjs/toolkit';

import championReducer from './championSlice';

export default configureStore({
  reducer: {
    champion: championReducer,
  },
});
