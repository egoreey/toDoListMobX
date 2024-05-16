import React from 'react';
import { observer } from 'mobx-react';
import { todoStore } from '../stores/TodoStore';

const TodoList: React.FC = observer(() => {
    return (
        <ul>
            {todoStore.todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => todoStore.removeTodo(todo.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
});

export default TodoList;
