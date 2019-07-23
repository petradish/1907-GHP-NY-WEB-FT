import { createStore } from "redux";

// ACTION TYPES
const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';

// ACTION CREATOR
const deposit = (amount) => {
  return {
    type: DEPOSIT,
    amount: amount
  }
}
const withdraw = (amount) => ({
  type: WITHDRAW,
  amount
});

const balance = document.getElementById("balance");
const deposit5 = document.getElementById("deposit5");
const deposit25 = document.getElementById("deposit25");
const withdraw5 = document.getElementById("withdraw5");
const withdraw25 = document.getElementById("withdraw25");

deposit5.onclick = () => store.dispatch(deposit(5))
deposit25.onclick = () => store.dispatch(deposit(25))
withdraw5.onclick = () => store.dispatch(withdraw(5))
withdraw25.onclick = () => store.dispatch(withdraw(25))

const reducer = (state = { balance: 0 }, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + action.amount }
    case WITHDRAW:
      return { balance: state.balance - action.amount }
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("The store state changed. Here is the new state:", store.getState());
  balance.innerText = `$ ${store.getState().balance}`
})
