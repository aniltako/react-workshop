import React from 'react'; 

export default class VirtualDom extends React.Component { 
	constructor(props) {
		super(props); 
        this.state = { date: new Date().toLocaleString() };
	}  

	componentDidMount() { 
        setInterval(function(){
            this.setState({date: new  Date().toLocaleString()});
        }.bind(this), 1000);
	} 

   	render() { 
		return ( 
			<div> 
                <h1> Hello World</h1> 
                <h3> Current Date and Time :: {this.state.date} </h3>
            </div>
        ); 
	} 
}