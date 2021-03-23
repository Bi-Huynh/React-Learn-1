import { TodoProvider } from '../../../stores/Todo.jsx';
import TodoFooter from '../Footer/Footer.jsx';
import TodoHeader from '../Header/Header.jsx';
import TodoList from '../List.jsx';
import './Card.css';

const TodoCard = () => {
    return (
        <TodoProvider>
            <div className="todo-card">
                <TodoHeader></TodoHeader>
                <TodoList></TodoList>
                <TodoFooter></TodoFooter>
            </div>
        </TodoProvider>
    );
};

export default TodoCard;
