import React, { Component,PropTypes } from 'react';
console.log(22);
class App extends Component {
	render() {
		const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
		return (
			<p>
				Clicked:{counter} times
				{' '}
				<button onClick={increment}>+</button>
				{' '}
				<button onClick={decrement}>-</button>
				{' '}
				<button onClick={incrementIfOdd}>Increment if odd</button>
				{' '}
				<button onClick={() => incrementAsync()}>Increment async</button>
			</p>
		)
	}
}

App.propType = {
	increment: PropTypes.func.isRequired,
	incrementIfOdd: PropTypes.func.isRequired,
	incrementAsync:PropTypes.func.isRequired,
	decrement: PropTypes.number.isRequired,
	counter: PropTypes.number.isRequired
}

export default App;