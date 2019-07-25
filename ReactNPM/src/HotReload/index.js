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
			<div className="flex-item"> 
                <h1>Hello { this.state.hello }</h1> 
                <button onClick={this.changeState}>Hot Reload!!!!</button> 
                <span>Current Date and Time :: {this.state.date}</span>
            </div>
        ); 
	} 
}

export default hot(HotReload);