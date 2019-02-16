import React, { Component } from 'react';
import './Display.css';


class Display extends Component {
    render() {
        const {header, text } = this.props;
            return (
              <div className = {this.props.className}>
                  <h className="header">{header}</h>
                  <p className="text"> {text}</p>
              </div>
            );
    }
}

export default Display;
