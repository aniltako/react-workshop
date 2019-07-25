import { hot } from 'react-hot-loader/root'
import React from 'react'; 

class HotReload extends React.Component { 
	constructor(props) {
		super(props); 
		this.state = { hello : "World!", date: new Date().toLocaleString() };
		
		this.changeState = this.changeState.bind(this);
	} 
	changeState() {
		this.setState({ hello : "Hot Reload!" }); 
	} 

	render() { 
		return ( 
			<div> 
                <h1>Hello { this.state.hello }</h1> 
                <h2><a onClick={this.changeState}>Hot Reload!!!!</a></h2> 
                <h3>Current Date and Time :: {this.state.date}</h3>
            </div>
        ); 
	} 
}

export default hot(HotReload);