import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h3 style={{marginTop: '80px', color: '#FFB038', paddingBottom: '5px', textAlign: 'center'}}>4O4 - Page Not Found!</h3>
            <Link style={{color: '#A8B3FF'}} to="/">Home</Link>
        </div>
    );
};

export default NotFound;