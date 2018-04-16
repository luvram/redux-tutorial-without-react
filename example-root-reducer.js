const redux = require('redux');

/** define action type */
const ADD_AGE = 'ADD_AGE';
const CHANGE_NAME = 'CHANGE_NAME';

/** reducer */
function born(state = { year: 1990, age: 1 }, action) {
  switch (action.type) {
    case ADD_AGE:
      const newState = Object.assign({}, state, { age: state.age + action.age });
      return newState;
    default:
      return state
  }
}
function info(state = { name: 'boram', surName: 'kim' }, action) {
  switch (action.type) {
    case CHANGE_NAME:
      const newState = Object.assign({}, state, { name: action.name });
      return newState;
    default:
      return state
  }
}

/** combine reducers */
const reducer = redux.combineReducers({ born, info });

/** create store */
const store = redux.createStore(reducer);


/** Test */
console.log(store.getState());

store.dispatch({ type: ADD_AGE, age: 1 });
console.log(store.getState());

store.dispatch({ type: CHANGE_NAME, name: 'rambo' })
console.log(store.getState());