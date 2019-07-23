import React from 'react';
import {increment} from './store';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: () => dispatch(increment())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
