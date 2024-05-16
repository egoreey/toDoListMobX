import React, { useState } from 'react';
import { todoStore } from '../stores/TodoStore';

const TodoForm: React.FC = () => {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        todoStore.addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить задание"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TodoForm;
