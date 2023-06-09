import { useState } from "react";
import './TodoInput.css';

export const TodoInput = () => {
    const [inputText, setInputText] = useState('');
 
    const handleInputText = (e) => {
 
    };

    const addTodo = () => {

    };

    /* 
        TODO:
        1. Use the state variable to store the 
           text from the input field
        2. Use the handleInputText function to handle 
           the input text.
        3. Use the addTodo to handle the new Todo. 
            Hint: the setTodos from the props will update
            the todos state.
    */

    return (
        <div className="input-container">
            <input type="text" placeholder="Add a todo"/>
            <span className="material-symbols-outlined add-icon">
                add
            </span>
        </div>
    )
};

