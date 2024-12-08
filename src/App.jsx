import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState('Welcome to the Book Library!');

    const handleClick = () => {
        setMessage('Explore your favorite books!');
    };

    return (
        <div className="App">
            <h1>{message}</h1>
            <button onClick={handleClick}>Get Started</button>
        </div>
    );
}

export default App;
