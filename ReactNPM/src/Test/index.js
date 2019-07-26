import React from 'react'; 

export class HelloTest extends React.Component { 
	constructor(props) {
		super(props); 
	}  
   	render() { 
		return ( 
			<div>
                <HelloWorld name="World"/> 
                <CurrentDateTime />
            </div>
        ); 
	} 
}

export function HelloWorld (props) {
	return <h1> Hello {props.name}</h1>;
}

export function CurrentDateTime () {
	return <h3> Current Date and Time :: {new Date().toLocaleString()} </h3>
}