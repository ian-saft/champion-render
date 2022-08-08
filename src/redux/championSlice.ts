import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'champion',
  initialState: {
    activeChampion: '',
    champion: {
      name: '',
      title: '',
      squareImageUrl: '',
      loadingImageUrl: '',
      lore: '',
    },
  },
  reducers: {
    changeChampion(state, { payload }) {
      return {
        ...state,
        activeChampion: payload.name,
        champion: payload,
      };
    },
    clearChampion(state) {
      return {
        ...state,
        activeChampion: '',
        champion: {
          name: '',
          title: '',
          squareImageUrl: '',
          loadingImageUrl: '',
          lore: '',
        },
      };
    },
  },
});

export const { changeChampion, clearChampion } = slice.actions;

export default slice.reducer;
