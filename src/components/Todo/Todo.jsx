import './Todo.css'

export const Todo = ({ title }) => {
    return (
        <div className="todo">
            <p>{title}</p>
            <span className="material-symbols-outlined delete-icon">
                delete
            </span>
        </div>
    )
};