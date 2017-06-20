/**
 * Created by lenovo on 2017/4/10.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const reducer = (state, action)=>{
  const type = action.type;
  switch (type) {
      case 'add':
          return state++;
      case 'decrease':
          return state--;
      default:
          return state;
  }
};
const store = createStore(reducer);

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : 0
        }
    }
    render (){
        <div>
            <button onClick={this.add}>add</button>
            <button onClick={this.decrease}>decrease</button>
        </div>
    }
}