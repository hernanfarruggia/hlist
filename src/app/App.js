import React from 'react';

import './app.css';

import Todos from '../todos';

function App () {

    return(
        <div className = "app" >
            <div className="title">hList</div>
            <Todos />
        </div>
    );
}

export default App;
