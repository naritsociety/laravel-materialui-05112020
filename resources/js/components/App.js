import React from 'react';
import ReactDOM from 'react-dom';

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
    <App />, 
    document.getElementById('root'));
}
