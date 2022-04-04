import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

const App = () => {
    return (
        <div className = 'tc'>
            <h1>RobotFriends</h1>
            <SearchBox />
            <CardList />
        </div>
        
    );
}

export default App;