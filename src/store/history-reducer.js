import { ActionType } from './action';

const HISTORY_MAX_ENTRIES = 10;

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_HISTORY_DATA:
      if (state.history.length < HISTORY_MAX_ENTRIES) {
        return {
          ...state,
          history: [...state.history, action.payload],
        };
      } else {
        return state.history
          .slice(0, HISTORY_MAX_ENTRIES)
          .unshift(action.payload);
      }
    default:
      return state;
  }
};

export { historyReducer };
