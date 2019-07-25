import { hot } from 'react-hot-loader/root'
import React from 'react'; 

class Lifecycle extends React.Component { 
	constructor(props) {
        console.log("constructor");
		super(props); 
        this.state = { hello : "World!", date: new Date().toLocaleString() };
        this.changeState = this.changeState.bind(this);
	} 

	componentWillMount() {
		console.log("componentWillMount"); 
	} 

	componentDidMount() { 
        console.log("componentDidMount"); 
        setInterval(function(){
            this.setState({date: new  Date().toLocaleString()});
        }.bind(this), 1000);
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
			<div> 
                <h1>Hello { this.state.hello }</h1> 
                <h2><a onClick={this.changeState}>Press Here!</a></h2> 
                <h3>Current Date and Time :: {this.state.date}</h3>
            </div>
        ); 
	} 
}

export default hot(Lifecycle);