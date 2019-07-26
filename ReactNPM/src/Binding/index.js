import React from 'react';

export default class Binding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    incrementCounter () {
        this.setState({count: ++this.state.count})
    }
    
    decrementCounter () {
        this.setState({count: --this.state.count})
    }

    render() {
        return (
            <div className="flex-item">
                <Counter count={this.state.count}/>
                <button className="btn btn-info" onClick={this.incrementCounter}>Increase +</button>
                {' '}
                <button className="btn btn-info" onClick={this.decrementCounter}>Decrease -</button>
            </div>
        )
    }
}

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        }
    }

    // componentWillReceiveProps (nextProps) {
    //     if ( nextProps.count !== this.state.count ) {
    //         this.setState({count: nextProps.count});
    //     }
    // }

    render () {
        // this.props.count = 1;
        return (
            <h1>
                Count : {this.state.count}
            </h1>
        )
    }
}