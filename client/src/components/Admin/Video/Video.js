import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../../actions';
import './style.css';

class Video extends Component {
    state = {
        displayTitle: this.props.video.displayTitle,
        save: false,
        delete: false,
    };
    getBtnClass(type) {
        if (this.state.save || this.state.delete) {
            return 'button disabled';
        } else {
            return 'button';
        }
    }
    getBtnText(type) {
        if (type === 'save') {
            return this.state.save === true ? 'Svaing...' : 'Save';
        } else if (type === 'delete') {
            return this.state.delete === true ? 'Deleting...' : 'Delete';
        }
    }
    async save() {
        this.setState({ save: true });
        const body = {
            displayTitle: this.state.displayTitle,
            youtubeId: this.props.video.youtubeId,
        };
        await axios.patch('/api/video', body);
        await this.props.fetchVideoList();
        this.setState({ save: false });
    }
    async delete() {
        this.setState({ delete: true });
        await axios.delete('/api/video', {
            data: { youtubeId: this.props.video.youtubeId },
        });
        await this.props.fetchVideoList();
        this.setState({ delete: false });
    }
    render() {
        return (
            <form className="ui form">
                <div id="formVideo">
                    <div id="inputVideo">
                        <input
                            id="textVideo"
                            type="text"
                            value={this.state.displayTitle}
                            onChange={(event) =>
                                this.setState({
                                    displayTitle: event.target.value,
                                })
                            }
                        ></input>
                    </div>

                    <div id="btnVideo">
                        <div
                            className={`ui blue ${this.getBtnClass('save')}`}
                            style={{ marginRight: '20px' }}
                            onClick={() => this.save()}
                        >
                            <i className="save icon"></i>
                            {this.getBtnText('save')}
                        </div>
                        <div
                            className={`ui red ${this.getBtnClass('delete')}`}
                            onClick={() => this.delete()}
                        >
                            <i className="trash alternate icon"></i>
                            {this.getBtnText('delete')}
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(Video);
