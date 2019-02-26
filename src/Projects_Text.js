import React, { Component } from 'react';
import './Projects_Text.css';


class Projects_Text extends Component {
    render() {
        const {header, text } = this.props;
            return (
                <div className = "hi">
              <div className = {this.props.className}>
                  <h className="header">{header}</h>
                  <p className="text"> {text}</p>
              </div>
              </div>
            );
    }
}

export default Projects_Text;
