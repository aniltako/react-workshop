import React from 'react'; 

export default class HandleEvent extends React.Component { 
	constructor(props) {
		super(props); 
        this.state = {
            toggle: false,
            mouseOut: false
        };

        this.handleOnBtnClick = this.handleOnBtnClick.bind(this);
        this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
        this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
	}  

    handleOnBtnClick () {
        this.setState({toggle: !this.state.toggle});
    }

    handleOnMouseOver () {
        this.setState({mouseOut: false});
    }

    handleOnMouseOut () {
        this.setState({mouseOut: true});
    }

   	render() { 
		return ( 
			<div className="flex-item"> 
                <div className="card" onMouseOver={this.handleOnMouseOver}  
                    onMouseOut={this.handleOnMouseOut}>
                    <p className="title">HandleEvent</p>
                    <span>{this.state.mouseOut ? 'Mouse Out' : 'Mouse Over'}</span><br/>
                    <button className="btn btn-success" onClick={this.handleOnBtnClick}>
                        Toggle {this.state.toggle ? "ON" : "OFF"}
                    </button>
                </div>
            </div>
        ); 
	} 
}