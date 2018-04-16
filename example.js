const redux = require('redux');
const createStore = redux.createStore;

/** define action type */
const ADD_AGE = 'ADD_AGE';

/** reducer */
function calculate(state = { name: 'boram', age: 1 }, action) {
  switch (action.type) {
    case ADD_AGE:
      const newState = Object.assign({}, state, { age: state.age + action.age });
      return newState;
    default:
      return state
  }
}
 
/** create store */
const store = createStore(calculate);


/** Test */
console.log(store.getState());

store.dispatch({ type: ADD_AGE, age: 1 });
console.log(store.getState());

store.dispatch({ type: ADD_AGE, age: 3 })
console.log(store.getState());