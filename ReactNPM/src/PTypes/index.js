import React from 'react'; 
import PropTypes from 'prop-types';

export default class PTypes extends React.Component {   

   	render() { 
		return ( 
            <User username="john" 
                email="john@gamil.com"  
                age={9} 
                address={{country: "Nepal", city: ["Kathmandu", "Bhaktapur"]}}
                gender="Male"/>
        ); 
	} 
}

class User extends React.Component {
    render() { 
		return ( 
			<div> 
                <div className="card">
                    <h1>{this.props.username}</h1>
                    <p className="title">{this.props.email}</p>
                    <p>Gender : {this.props.gender}</p>
                </div>
            </div>
        ); 
	} 
}

User.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string,
    age: PropTypes.number,
    address: PropTypes.shape({
        country: PropTypes.string,
        city: PropTypes.arrayOf(PropTypes.string)
    }),
    gender: PropTypes.oneOf(['Female', 'Male']).isRequired,


}