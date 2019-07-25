import React from 'react'; 
import PropTypes from 'prop-types';

export default class PTypes extends React.Component {   

   	render() { 
		return ( 
			<div> 
                <User name="john" email="john@gamil.com"  age={9} address={{country: "Nepal", city: ["Kathmandu", "Bhaktapur"]}}
                gender="male"
                />
            </div>
        ); 
	} 
}

class User extends React.Component {
    render() { 
		return ( 
			<div> 
                <span>{this.props.name}</span>
            </div>
        ); 
	} 
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    age: PropTypes.number,
    address: PropTypes.shape({
        country: PropTypes.string,
        city: PropTypes.arrayOf(PropTypes.string)
    }),
    gender: PropTypes.oneOf(['female', 'male']).isRequired,


}