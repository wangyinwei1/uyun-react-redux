import { combineReducers } from 'redux'
import counter from './counter.jsx'
import { routerReducer } from 'react-router-redux'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counter,
  routing: routerReducer
})

export default rootReducer
