import React, { Suspense, lazy } from 'react';

const AsyncComponent = lazy( () => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(import('./AsyncComponent'))
        }, 3000);
    })
    // return import('./AsyncComponent')
});

export default class LazyLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            load: false
        }
        this.handleOnClickBtn = this.handleOnClickBtn.bind(this);
    }

    handleOnClickBtn () {
        this.setState({load: true})
    }

    render(){
        return (
            <div className="flex-item">
                {
                    this.state.load ?
                    <Suspense fallback={<div>Loading...</div>}>
                        <AsyncComponent />
                    </Suspense> : null

                }
                <button className="btn btn-info" onClick={this.handleOnClickBtn}>Load Component</button>
            </div>
        )
    }
}