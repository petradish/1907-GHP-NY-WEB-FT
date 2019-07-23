import React from 'react';
import ReactDOM from 'react-dom';
import store, {increment} from './store';

const connect = (specifyStateIWant, specifyBehaviorIWant) => (OriginalComponent) => {
  return class ConnectedToStore extends React.Component {
    constructor() {
      super();
      this.state = store.getState();
    }

    componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
        this.setState(store.getState());
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const stateIWant = specifyStateIWant(this.state);
      const behaviorIWant = specifyBehaviorIWant(store.dispatch);
      return <OriginalComponent {...stateIWant} {...behaviorIWant} />;
    }

  };
};

const Counter = (props) => {
  const count = props.count;
  const clickHandler = props.clickHandler;
  return (
    <div id="container">
      <div id="counter">
        <h1>{count}</h1>
        <button type="button" onClick={clickHandler}>Increment</button>
      </div>
    </div>
  );
};

const specifyStateIWantForCounter = (state) => ({
  count: state.count
});

const specifyBehaviorIWantForCounter = (dispatch) => ({
  clickHandler: () => dispatch(increment())
});

const ConnectedCounter = connect(specifyStateIWantForCounter, specifyBehaviorIWantForCounter)(Counter);

ReactDOM.render(
  <ConnectedCounter />,
  document.getElementById('app')
);
