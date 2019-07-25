import React from 'react'; 

export default class HandleEvent extends React.Component { 
	constructor(props) {
		super(props); 
        this.state = {
            name: String
        };
        this.handleInputChange = this.handleInputChange.bind(this);
	}  

    handleInputChange (e) {
        this.setState({name: e.target.value})
    }

   	render() { 
		return ( 
			<div> 
                <h1>Name</h1> 
                <input value="" onChange={this.handleInputChange}/>
            </div>
        ); 
	} 
}