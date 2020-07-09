import React, { Component } from 'react';
import axios from 'axios';

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
    componentDidMount() {}
    async save() {
        this.setState({ save: true });
        const body = {
            displayTitle: this.state.displayTitle,
            youtubeId: this.props.video.youtubeId,
        };
        await axios.patch('/api/video', body);
        this.setState({ save: false });
    }
    async delete() {
        this.setState({ delete: true });
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

export default Video;
