import { IFavor } from '@/interfaces/favor';
import { createSlice } from '@reduxjs/toolkit';

const favor = createSlice({
  name: 'favor',
  initialState: [],
  reducers: {
    setFavorState(state, action) {
      return (state = action.payload);
    },
    deleteFavorState(state, action) {
      return (state = state.filter((item: IFavor) => item.productId !== action.payload));
    },
  },
});

export let { setFavorState, deleteFavorState } = favor.actions;

export default favor;
