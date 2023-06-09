
# Todo App

This is a simple Todo application built with React. It allows you to add and manage your tasks.

## Getting Started

To get started with the Todo App, follow the steps below:

### Installation

1. Clone the repository or download the project files.

2. Open a terminal and navigate to the project directory.

3. Install the project dependencies by running the following command:

   ```shell
   npm install
   npm start
	```
 Open your web browser and visit `http://localhost:5173` to see the Todo App in action.
 ### Usage

1.  In the project directory, open the `src/App.js` file.
    
2.  You will find three components imported: `Header`, `TodoInput`, and `Todos`. These components are responsible for the application's header, input field, and list of todos, respectively.
    
3.  Your task is to complete the following TODOs in the code:
    
    #### `src/App.js`
    
    -   1. 
	    -  You will see the todos state using `data` from `data.json` to render the todos. 
	    - Use the `todos` state to render the todos.
    -   2. Pass the `setTodos` function to the relevant components so that they can update the `todos` state.
    
    #### `src/components/TodoInput/TodoInput.js`
    
    -   1. Use the state variable to store the text from the input field.
    -   2. Use the `handleInputText` function to handle the input text.
    -   3. Use the `addTodo` function to handle the new todo. Hint: The `setTodos` from the props will update the `todos` state.
    
    #### `src/components/Todos/Todos.js`
    
    -   Map through the `todos` array (from the props) and render a `Todo` component for each todo.
    - 
### Customization
You can customize the styling of the Todo App by modifying the CSS files located in the respective `components` directories.

Feel free to experiment and make the application your own!