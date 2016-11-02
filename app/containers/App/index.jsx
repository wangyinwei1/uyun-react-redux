import React, { Component,PropTypes } from 'react';
import style from './index.less';
import { DynamicChartComponent } from '../../components';
const moment = require('moment');

//时间轴外框组件
class TimeAxis extends Component {
	render() {
		return (
			<div className={style.timeAxisItem}>
				<div className='clearfix'>
					<h3 className={style.itemTitle}>fsdfasdf</h3>
					<div className={style.btnGroup}>
						<button className={'btn '+style.btnIcon}>
							<i className=''></i>
						</button>
						<button className={'btn '+style.btnIcon}>
							<i className=''></i>
						</button>
						<button className={'btn '+style.btnIcon}>
							<i className=''></i>
						</button>
						<button className={'btn '+style.btnIcon}>
							<i className=''></i>
						</button>
					</div>
				</div>
				<div>
					<DynamicChartComponent />
				</div>
			</div>
		)
	}
}

class App extends Component {

	render() {
		const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;

		let items = [];
		for(let item of this.props.applications||[1,2]){
			items.push(<TimeAxis key={item} />);
		};	
		console.log(items);
		return (
			<div>
				<div className={style.titleBox} >
					<h1 className={style.title}>业务中心</h1>
					<h3 className={style.dateTitle}>
						<span>{moment().format('YYYY年MM月DD日')}</span>
						<span>最近60分钟</span>
					</h3>
					<button className={style.addButton+' btn'}>添加</button>
				</div>
				<div className={style.timeAxisWrap}>
					{items}
				</div>
				
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