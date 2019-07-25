import React from 'react';

function FuncComp (props) {
    return <h1> Hello, {props.name}</h1>
}

class ClassComp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return <h1> Hello, {this.props.name}</h1>
    }
}

class ComponentsProps extends React.Component {
    render() {
        return (
            <div className="flex-item">
                <FuncComp name="Function Component"/>
                <ClassComp name="Class Component"/> 
            </div>
        )
    }
}

export default ComponentsProps;