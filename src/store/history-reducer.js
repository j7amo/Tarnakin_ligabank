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
          history: [action.payload, ...state.history],
        };
      } else {
        return {
          ...state,
          history: [
            action.payload,
            ...state.history.slice(0, HISTORY_MAX_ENTRIES - 1),
          ],
        };
      }
    case ActionType.CLEAR_HISTORY_DATA:
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};

export { historyReducer };
