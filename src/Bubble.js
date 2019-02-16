import React, { Component} from 'react';

class Bubble extends Component{
    render(){
        const { w, h, color } = this.props;
        return(
            /*<div className = "box">*/
                <svg width="w" height="h" className={this.props.className}>
                  <rect x={0} y={0} rx={Math.min(w, h)/2} width={w} height={h} fill = {color}/>
                </svg>
            
            
            /*</div>*/

        );
    }

}

export default Bubble;