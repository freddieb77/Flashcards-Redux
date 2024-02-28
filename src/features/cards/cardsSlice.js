/* import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {},
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id,
        front,
        back,
      };
    },
  },
});

export const { addCard } = cardsSlice.actions;
export const selectCardById = (state, cardId) => state.cards.cards[cardId];

export default cardsSlice.reducer; */

import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {},
  },
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    },
  },
});

export const { addCard } = cardsSlice.actions;
// Selector
export const selectCardById = (state, id) => state.cards.cards[id];;
// Reducer
export default cardsSlice.reducer;