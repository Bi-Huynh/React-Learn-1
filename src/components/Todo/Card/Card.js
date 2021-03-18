// @flow
import * as React from 'react';
import TodoHeader from '../Header/Header.js';
import TodoList from '../List.js';

import './Card.css';

type State = {
    todoItems: Array<Object>,
};

class TodoCard extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                { title: 'Mua bim bim', isComplete: false },
                { title: 'Mua gạo', isComplete: false },
                { title: 'Đi đổ xăng', isComplete: false },
            ],
        };

        this.onItemClicked = this.onItemClicked.bind(this);
        this.onKeyEnter = this.onKeyEnter.bind(this);
        this.onAllComplete = this.onAllComplete.bind(this);
    }

    onKeyEnter(event) {
        let contentTodo = event.target.value.trim();
        if (contentTodo !== '' && event.key === 'Enter') {
            let { todoItems } = this.state;
            this.setState({
                todoItems: [
                    { title: contentTodo, isComplete: false },
                    ...todoItems,
                ],
            });
            event.target.value = '';
        }
    }

    onItemClicked(item, index) {
        return (event) => {
            let isComplete = item.isComplete;
            let { todoItems } = this.state;
            this.setState({
                todoItems: [
                    ...todoItems.slice(0, index),
                    { ...item, isComplete: !isComplete },
                    ...todoItems.slice(index + 1),
                ],
            });
        };
    }

    onAllComplete() {
        let { todoItems } = this.state;
        this.setState({
            todoItems: [...todoItems],
        });
    }

    render() {
        return (
            <div className="todo-card">
                <TodoHeader
                    onAllComplete={this.onAllComplete}
                    onKeyEnter={this.onKeyEnter}
                ></TodoHeader>
                <TodoList
                    todoItems={this.state.todoItems}
                    onItemClicked={this.onItemClicked}
                ></TodoList>
            </div>
        );
    }
}

export default TodoCard;
