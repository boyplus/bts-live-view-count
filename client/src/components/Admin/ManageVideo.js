import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManageVideo extends Component {
    render() {
        if (!this.props.auth) return null;
        if (this.props.auth.role !== 'admin') return null;
        return (
            <div>
                <h1>This is manage video</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}
export default connect(mapStateToProps)(ManageVideo);
