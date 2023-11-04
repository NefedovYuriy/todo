import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

const App = () => {
    const todoDate = [
        {label: 'Do some work', important: false, id: 1},
        {label: 'Create App', important: true, id: 2},
        {label: 'Sell Awesome App', important: true, id: 3}
    ];
    return (
    <div className = 'app'>
        <AppHeader/>
        <SearchPanel/>
        <TodoList todos ={todoDate}/>
    </div>
    )
}

export default App;