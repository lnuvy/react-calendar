import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { db } from "../../fbase";
import { collection, getDocs } from "firebase/firestore";

const LOAD = "LOAD";
const ADD = "ADD";
const DELETE = "DELETE";
const CHECK = "CHECK";

const initialState = {
  list: [],
};

const loadTodo = createAction(LOAD, (list) => ({ list }));
const addTodo = createAction(ADD, (list) => ({ list }));
const deleteToto = createAction(DELETE, (id) => ({ id }));

// middlewares
const todos_db = collection(db, "todos");

const loadTodoFB = () => {
  return async function (dispatch, getState) {
    let list = [];

    const querySnapshot = await getDocs(todos_db);
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    dispatch(loadTodo(list));
  };
};

export default handleActions(
  {
    [LOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
  },
  initialState
);

export const actionCreators = {
  loadTodoFB,
};
