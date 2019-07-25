import React from 'react';

function GreetingFunc (props) {
    return <h1> Hello, {props.name}</h1>
}

class GreetingComp extends React.Component {
    render() {
        return <h1> Hello, {this.props.name}</h1>
    }
}

class ComponentsProps extends React.Component {
    render() {
        return (
            <div>
                <GreetingFunc name="Function"/>
                <GreetingComp name="Component"/> 
            </div>
        )
    }
}

export default ComponentsProps;