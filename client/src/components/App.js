import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Landing from './Landing';
import Admin from './Admin/Admin';
import ManageUser from './Admin/ManageUser';
import ManageVideo from './Admin/Video/ManageVideo';
import './styles/style.css';

class App extends Component {
    async componentDidMount() {
        await this.props.fetchUser();
    }
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Landing}></Route>
                        <Route path="/admin" component={Admin}></Route>
                        <Route
                            path="/admin/videos"
                            component={ManageVideo}
                        ></Route>
                        <Route
                            path="/admin/users"
                            component={ManageUser}
                        ></Route>
                        <Route
                            path="/admin/admins"
                            component={ManageUser}
                        ></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
