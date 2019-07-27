import React from 'react';

export default class TodoList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          todoText: '',
          todoItems: []
        }
        this.handleTodoTextChange = this.handleTodoTextChange.bind(this)
        this.handleInputKeyPress = this.handleInputKeyPress.bind(this)
        this.handleDeleteTodoItem = this.handleDeleteTodoItem.bind(this)
    }

    addTodoItem (text) {
      const newTodoItems = this.state.todoItems.slice()
      newTodoItems.push({ text, id: Date.now() })
      this.setState({
        todoItems: newTodoItems
      })
    }

    handleInputKeyPress (e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            this.addTodoItem(this.state.todoText)
            this.setState({ todoText: '' })
        }
    }

    handleTodoTextChange (e) {
        this.setState({
            todoText: e.target.value
        })
    }

    handleDeleteTodoItem (id) {
        const newTodoItems = this.state.todoItems.slice()
        const deleteItemIndex = newTodoItems.findIndex(todoItem => todoItem.id === id)
        newTodoItems.splice(deleteItemIndex, 1)
        this.setState({
            todoItems: newTodoItems
        })
    }

    render() {
        return (
            <div className="flex-item">
                <div className="todolist">
                    <h1>TodoList</h1>
                <input
                    type="text"
                    value={this.state.todoText}
                    onChange={this.handleTodoTextChange}
                    className="form-control add-todo"
                    placeholder="Add Item"
                    onKeyPress={this.handleInputKeyPress}
                />
                    <hr/>
                    <div className="list-items">
                        <ul className="list-group list-group-flush">
                            {this.state.todoItems.map(
                                todoItem => (
                                    <ListItem
                                        key={todoItem.id}
                                        id={todoItem.id}
                                        title={todoItem.text}
                                        onDeleteClick={this.handleDeleteTodoItem}
                                    />
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function ListItem (props) {
    return (
        <li className="list-group-item">
            <label>{props.title}</label>
            <button type="button" className="close" aria-label="Close" onClick={handleDeleteClick}>
                <span aria-hidden="true">&times;</span>
            </button>
        </li>
    )

    function handleDeleteClick () {
        if (props.onDeleteClick) props.onDeleteClick(props.id)
    }
}