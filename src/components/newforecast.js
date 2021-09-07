/* eslint-disable no-trailing-spaces */
import React, { Component } from 'react';

class Forecast extends Component {
    render() {
        return (
            <div> 
                day 1 :
<p>{this.props.desc1}</p>
<p>{this.props.date1}</p><b/>

day 2 :
<p>{this.props.desc2}</p>
<p>{this.props.date2}</p><b/>

day 3 :
<p>{this.props.desc3}</p>
<p>{this.props.date3}</p><b/>

                <div></div>
            </div>
        );
    }
}

export default Forecast;
