import React from 'react';

import Todos from '../todos';

function App () {

    return(
        <div className="container mt-5 mb-5">

            <div className="container mt-5">
                <div className="d-flex flex-row align-items-center">
                    <h2 className="mr-2"><i className="fas fa-list-ul"></i></h2>
                    <h1>hList</h1>
                </div>
                <h6>A simple todo app with a big ambition... <i className="far fa-smile"></i></h6>

                <Todos />
            </div>

        </div>
    );
}

export default App;
