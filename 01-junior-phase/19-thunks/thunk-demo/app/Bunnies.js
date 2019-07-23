import React from 'react';
import {connect} from 'react-redux';
import {getBunnies} from './store';

class Bunnies extends React.Component {
  componentDidMount() {
    // const {data} = await axios.get('/bunnies');
    // this.props.putBunniesInStore(data);
    this.props.getBunnies();
  }

  render () {
    const {bunnies} = this.props;

    return (
      <div>
        <h1>B U N N I E S</h1>
        {bunnies.map(bunny => {
          return (
            <div key={bunny.id}>
              <img src={bunny.imageUrl} />
              <div>
                <h2>{bunny.name}</h2>
                <em>Age: {bunny.age}</em>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => ({
  bunnies: state.bunnies
});

const mapDispatch = (dispatch) => ({
  getBunnies: () => dispatch(getBunnies())
});

export default connect(mapState, mapDispatch)(Bunnies);
