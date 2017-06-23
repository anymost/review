import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux'
import mapStateToProps from './stateManager/mapStateToProps'
import mapDispatchToProps from './stateManager/mapDispatchToProps'
import store from './stateManager/store'

import App from './App';
import './index.css';
let Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}><Container/></Provider>,
  document.getElementById('root')
);
