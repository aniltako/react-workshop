import React from 'react';
import ReactDOM from 'react-dom';
import Lifecycle from './Lifecycle';
import Reactdom from './VirtualDom';
import ComponentsProps from './ComponentsProps';
import HotReload from './HotReload';
import PTypes from './PTypes';
import LazyLoader from './LazyLoader';
class App extends React.Component{
    render(){
        return(
            <div>Hello World!!!!</div>
        )
    }
}

ReactDOM.render(
    <LazyLoader />
, document.getElementById('root'));