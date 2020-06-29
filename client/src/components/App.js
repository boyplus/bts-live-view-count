import React, { Component } from 'react';
import axios from '../axios/axios';
import './App.css';

class App extends Component {
    async componentDidMount() {
        const res = await axios.get('/videos', {
            params: {
                id: '9IHwqdz8Xhw,D_6QmL6rExk',
            },
        });
        console.log(res.data);
    }
    render() {
        return (
            <div id="app">
                <div>
                    <img
                        style={{ marginBottom: '25px' }}
                        alt="bts-log"
                        width="auto"
                        height="250px"
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7247d6a-142c-47a6-a615-f88f13936642/dbf8j7j-e5b54ac0-3107-4c18-aa16-d34345b90543.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTcyNDdkNmEtMTQyYy00N2E2LWE2MTUtZjg4ZjEzOTM2NjQyXC9kYmY4ajdqLWU1YjU0YWMwLTMxMDctNGMxOC1hYTE2LWQzNDM0NWI5MDU0My5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._RcuNCRWbumCjBmc99kFMoov1ukOJjmA4EiUCFOgp_0"
                    ></img>
                    <h1 id="header">
                        BTS live view count
                    </h1>
                </div>
            </div>
        );
    }
}

export default App;
