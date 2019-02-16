import React, { Component } from 'react';
import './Headers.css';

class Headers extends Component {
    render() {
        const { text, color } = this.props;
        return(
            <div className = "headers" >
                <header> 
                    <p color = {color}>{text}</p>
                </header>
            </div>

        );
    }
}

export default Headers;
