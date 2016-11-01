import React, { Component,PropTypes } from 'react';
import style from './index.less';

class App extends Component {
	render() {
		const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
		return (
			<div>
				<p className={style.title}c>
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
				{this.props.children}
			</div>
		)
	}
}

App.propType = {
	increment: PropTypes.func.isRequired,
	incrementIfOdd: PropTypes.func.isRequired,
	incrementAsync:PropTypes.func.isRequired,
	decrement: PropTypes.number.isRequired,
	counter: PropTypes.number.isRequired,
}

export default App;