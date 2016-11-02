
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './states/store/appStore.jsx';
import subscriptions from './states/subscriptions/index.jsx';
import { Router, Route, IndexRoute, hashHistory , browserHistory, IndexRedirect, useRouterHistory} from 'react-router';
import './theme/public.css';

import Facotry from './factory.js';
// 加载全局对象
Facotry.loadObjects();
// 加载全局函数
Facotry.loadFunctions();
// 加载装饰器
Facotry.loadDecorators();
// // 进行对象挂载
// Facotry.inject();

//唯一的状态树
const store = configureStore();

//设置hash路由
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

//创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(appHistory, store)

//订阅监听路由变化
subscriptions(store.dispatch,history);



//组件对象集合
import { App } from './routers';

import { DynamicChartComponent } from './components';

let root = document.getElementById('layout-content');
render( 
	<Provider store={store}>
	 	<Router history={history}>
		    <Route path="/">
		    	<IndexRedirect to="business" />
		    	<Route path="business" component={App} />
		    </Route>
		</Router>
	</Provider>, 
 root 
);
