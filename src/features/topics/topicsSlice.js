
import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';
const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: [],
      };
    },
    associateQuizWithTopic: (state, action) => {
      const {topicId, id} = action.payload;
      state.topics[topicId].quizIds.push(id);
    },
  },
});

export const { addTopic, associateQuizWithTopic } = topicsSlice.actions;

// Selector
export const selectTopics = (state) => state.topics.topics;

// Reducer
export default topicsSlice.reducer;