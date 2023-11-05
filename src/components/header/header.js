import React from 'react';
import SearchPanel from '../search-panel';


const Header = () => {
    return <header className = 'header'>
        <h1 >todos</h1>
        <SearchPanel/>
    </header>
};

export default Header;