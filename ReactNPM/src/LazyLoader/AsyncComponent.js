import React from 'react';

class AsyncComponent extends React.Component {
    render () {
        return(
            <div className="flex-item">
                <h3>Lazy Component</h3>
            </div>
        )
    }
}

export default AsyncComponent;