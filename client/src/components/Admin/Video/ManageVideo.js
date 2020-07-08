import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddVideo from './AddVideo';
import Videos from './Videos';
import * as actions from '../../../actions';

class ManageVideo extends Component {
    async componentDidMount() {
        await this.props.fetchVideoList();
    }

    render() {
        if (!this.props.auth) return null;
        if (this.props.auth.role !== 'admin') return null;
        return (
            <div>
                <AddVideo></AddVideo>
                <Videos videos={this.props.videos}></Videos>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth, videos: state.videoList };
}
export default connect(mapStateToProps, actions)(ManageVideo);
