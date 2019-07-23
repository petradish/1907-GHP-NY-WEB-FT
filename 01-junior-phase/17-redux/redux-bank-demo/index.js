/* eslint-disable no-case-declarations */
// import redux from 'redux';
const {createStore} = require('redux');

// action:
/*
{
  type: 'DEPOSIT',
  amount: 10
}
*/
const initialState = {
  balance: 0
}
// state:
/*
{
  balance: 0
}
*/
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'DEPOSIT':
      let newBalance = state.balance + action.amount;
      return {balance: newBalance};
    case 'WITHDRAW':
      return {balance: state.balance - action.amount};
    default:
      return state;
  }
};


const store = createStore(reducer);

// There are 3 main actions of the redux store:
//  1) getState: return what is currently in the store state
//  2) dispatch: send state changing actions to the store/reducer
//  3) subscribe: run some function every time the store state updates

console.log('initial state: ', store.getState());

store.subscribe(() => console.log('updated state: ', store.getState()));

store.dispatch({type: 'DEPOSIT', amount: 10});
store.dispatch({type: 'DEPOSIT', amount: 50});
store.dispatch({type: 'DEPOSIT', amount: 100});
store.dispatch({type: 'WITHDRAW', amount: 500});
