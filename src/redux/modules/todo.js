import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { firestore } from "../../fbase";

const LOAD = "LOAD";
const ADD = "ADD";
const DELETE = "DELETE";
const TOGGLE = "TOGGLE";

const initialState = {
  list: [],
};

const loadTodo = createAction(LOAD, (list) => ({ list }));
const addTodo = createAction(ADD, (todo) => ({ todo }));
const toggleTodo = createAction(TOGGLE, (id) => ({ id }));
const deleteToto = createAction(DELETE, (id) => ({ id }));

// middlewares
const todosDB = firestore.collection("todos");

const loadTodoFB = () => {
  return function (dispatch, getState) {
    todosDB.get().then((docs) => {
      let list = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          list = [...list, { ...doc.data(), id: doc.id }];
        }
      });
      dispatch(loadTodo(list));
    });
  };
};

const addTodoFB = (data) => {
  return function (dispatch, getState) {
    todosDB
      .add({ ...data })
      .then((doc) => {
        const newTodo = { ...data, id: doc.id };
        dispatch(addTodo(newTodo));
      })
      .catch(() => {
        console.log("추가에서 에러!");
      });
  };
};

const toggleTodoFB = (todo_id) => {
  return function (dispatch, getState) {
    const data = getState().todo.list.find((todo) => todo.id === todo_id);

    todosDB
      .doc(todo_id)
      .update({ isDone: !data.isDone })
      .then(() => {
        dispatch(toggleTodo(todo_id));
      });
  };
};

const deleteTodoFB = (todo_id) => {
  return function (dispatch, getState) {
    todosDB
      .doc(todo_id)
      .delete()
      .then(() => {
        dispatch(deleteToto(todo_id));
      })
      .catch(() => {
        console.log("삭제중 캐치문!");
      });
  };
};

export default handleActions(
  {
    [LOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [ADD]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.todo);
      }),
    [TOGGLE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.map((todo) => {
          return todo.id === action.payload.id
            ? { ...todo, isDone: !todo.isDone }
            : todo;
        });
      }),
    [DELETE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((t) => t.id !== action.payload.id);
      }),
  },
  initialState
);

export const actionCreators = {
  loadTodoFB,
  addTodoFB,
  toggleTodoFB,
  deleteTodoFB,
};
