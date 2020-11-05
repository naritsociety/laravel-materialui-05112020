import React from 'react';
import ReactDOM from 'react-dom';

// NEW
import ContainedButtons from './MaterialButton';
import PrimarySearchAppBar from './PrimarySearchAppBar';

function App() {
    return (
        <div className="container">
            <h3 className="text-center">Main Page</h3>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
        <React.Fragment>                        
            <PrimarySearchAppBar />
            <ContainedButtons />
        </React.Fragment>, 
    document.getElementById('root'));
}
