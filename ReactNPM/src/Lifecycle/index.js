import React from 'react'; 

class Lifecycle extends React.Component { 
	constructor(props) {
        console.log("constructor");
		super(props); 
        this.state = { hello : "World!" };
        this.changeState = this.changeState.bind(this);
	} 

	componentWillMount() {
		console.log("componentWillMount"); 
	} 

	componentDidMount() { 
        console.log("componentDidMount"); 
	} 

    shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate"); 
		return true; 
	} 

	componentWillUpdate() {
		console.log("componentWillUpdate"); 
	} 

	componentDidUpdate() {
		console.log("componentDidUpdate"); 
	} 

	changeState() {
		this.setState({ hello : "React Lifecycle!" }); 
	} 

	render() { 
        console.log("render")
		return ( 
			<div className="flex-item"> 
                <h1>Hello { this.state.hello }</h1> 
                <button className="btn btn-info" onClick={this.changeState}>Change Hello World!</button>
            </div>
        ); 
	} 
}

export default Lifecycle;