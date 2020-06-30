import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Admin from './Admin/Admin';

class App extends Component {
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Landing}></Route>
                        <Route exact path="/admin" component={Admin}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
