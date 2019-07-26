import React from 'react';
import ReactDOM from 'react-dom';
import Lifecycle from './Lifecycle';
import Reactdom from './VirtualDom';
import ComponentsProps from './ComponentsProps';
import HotReload from './HotReload';
import PTypes from './PTypes';
import LazyLoader from './LazyLoader';
import VirtualDom from './VirtualDom';
import HandleEvent from './HandleEvents'
import './style.css';
import TodoList from './TodoList';

class App extends React.Component{
    render(){
        return(
            <div>Welcome to React!!!!</div>
        )
    }
}

ReactDOM.render(
    <div className="flex-container">
        <TodoList />
    </div>
, document.getElementById('root'));