import React from 'react';
import ReactDOM from 'react-dom';
import store, {increment} from './store';
// import thingThatWasDefault from './store';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  clickHandler() {
    store.dispatch(increment());
    // this.setState(store.getState());
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={(this.clickHandler)}>Increment</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);
