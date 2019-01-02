import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    async componentDidMount(){
        const message = {
            text: 'This is a message from the client, Hello!',
            name: 'Kim K.'
        };
        const resp = await axios.post('/api/send-message', message);
        console.log('Send message resp:', resp);

        // const resp = await axios.get('/api/test');
        // console.log('Test response:', resp);
        //
        // const user = await axios.get('/api/user');
        // console.log('User response:', user);
    }

    render() {
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        );
    }
}

export default Test;
