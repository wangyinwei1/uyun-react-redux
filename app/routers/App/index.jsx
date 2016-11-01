import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { App } from '../../containers';
import * as CounterActions from '../../states/actions/counter.jsx';

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];
function mapStateToProps(state) {
  return {
    counter: state.counter,
    dataSource: dataSource,
    columns: columns
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(CounterActions, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(App);