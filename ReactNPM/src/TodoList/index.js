import React from 'react';

export default class TodoList extends React.Component {
    render() {
        return (
            <div className="flex-item">
                <div className="todolist">
                    <h1>TodoList</h1>
                <input type="text" className="form-control add-todo" placeholder="Add Item"/>
                    <hr/>
                    <div className="list-items">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <label>TodoList 1</label>
                                <button type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>
                            <li className="list-group-item">
                                <label>TodoList 2</label>
                                <button type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>
                            <li className="list-group-item">
                                <label>TodoList 3</label>
                                <button type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>
                            <li className="list-group-item">
                                <label>TodoList 4</label>
                                <button type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                    
            </div>
        )
    }
}