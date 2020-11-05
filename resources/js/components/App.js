import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

// NEW
import ContainedButtons from './MaterialButton';
import PrimarySearchAppBar from './PrimarySearchAppBar';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
             <HashRouter>
                {/*<Link to="/" replace>Home</Link>*/}
                <Route path="/" component={PrimarySearchAppBar}/>
            </HashRouter>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
        <App />, 
    document.getElementById('root'));
}
