import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>
                <TypewriterComponent
                    options={{
                        strings: ['Welcome to Berubari'],
                        autoStart: true,
                        loop: true,
                    }}
                /> 
            </h1>
        </div>
    );
};

export default Header;