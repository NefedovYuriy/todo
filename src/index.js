import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const TodoList = () => {
    return(
        <ul>
            <li>Learn React</li>
            <li>Create Awesome App</li>
            <li>Sell Awesome App</li>
        </ul>
    )
}

const AppHeader = () => {
    return <h1>My Todo List</h1>
    
}

const SearchPanel = () => {
    return <input placeholder='search'/>
}

const App = () => {
    return (
    <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList/>
    </div>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App/>)
