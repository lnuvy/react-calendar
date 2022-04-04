import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";

const SET_DATE = "SET_DATE";
const ADD_EVENT = "ADD_EVENT";
const LOADING = "LOADING";

const setDate = createAction(SET_DATE, (current) => ({ current }));

const initialState = {
  current: moment(),
};

// reducer
export default handleActions(
  {
    [SET_DATE]: (state, action) =>
      produce(state, (draft) => {
        draft.current = action.payload.current;
      }),
  },
  initialState
);

export const actionsCreators = {
  setDate,
};
