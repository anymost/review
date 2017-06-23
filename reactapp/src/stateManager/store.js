/**
 * Created by lenovo on 2017/6/23.
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default createStore(reducer,applyMiddleware(thunk));