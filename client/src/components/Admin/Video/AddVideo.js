import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../../actions';

class AddVideo extends Component {
    state = { url: '', name: '', errUrl: '', errName: '', success: false };
    async onSubmit() {
        let youtubeId = this.state.url;
        const displayTitle = this.state.name;
        let errName = '',
            errUrl = '';
        if (displayTitle.length === 0)
            errName = 'You must enter the display title';
        if (youtubeId.length === 0)
            errUrl = 'You must enter the youtube url / youtube ID';
        this.setState({ errName, errUrl, success: false });
        if (errUrl || errName) return;

        if (youtubeId.length > 11) {
            const idxV = youtubeId.search('v=');
            youtubeId = youtubeId.slice(idxV + 2, idxV + 13);
        }
        try {
            const res = await axios.post('/api/video', {
                youtubeId,
                displayTitle,
            });
            if (res.status === 200) {
                this.setState({ errName: '', errUrl: '' });
                this.setState({ success: true });
                await this.props.fetchVideoList();
            }
        } catch (err) {
            this.setState({ errUrl: err.response.data.msg });
        }
    }
    renderMessage() {
        if (this.state.errName.length > 0) {
            return <span style={{ color: 'red' }}>{this.state.errName}</span>;
        } else if (this.state.success) {
            return (
                <span style={{ color: 'green' }}>Add new video complete</span>
            );
        } else {
            return null;
        }
    }
    render() {
        return (
            <div style={{ marginBottom: '30px' }}>
                <h2>Add new video</h2>
                <form className="ui form" style={{ marginTop: '20px' }}>
                    <div className="field" style={{ margin: '0 0 0em' }}>
                        <label>Youtube url / Youtube ID</label>
                        <input
                            value={this.state.url}
                            onChange={(event) => {
                                this.setState({ url: event.target.value });
                            }}
                            type="text"
                            placeholder="https://www.youtube.com/watch?v=gwMa6gpoE9I"
                        ></input>
                        <div style={{ color: 'red', height: '2em' }}>
                            {this.state.errUrl}
                        </div>
                    </div>

                    <div className="field" style={{ margin: '0 0 0em' }}>
                        <label>Display Title</label>
                        <input
                            value={this.state.name}
                            onChange={(event) => {
                                this.setState({ name: event.target.value });
                            }}
                            type="text"
                            placeholder="BTS 'ON' Kinetic Manifesto Film"
                        ></input>
                        <div style={{ height: '2em' }}>
                            {this.renderMessage()}
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div
                            className="ui blue button"
                            onClick={() => this.onSubmit()}
                        >
                            <i className="video icon"></i>
                            Add new video
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, actions)(AddVideo);
