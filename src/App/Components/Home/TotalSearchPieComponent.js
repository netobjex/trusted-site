import React, { Component } from 'react'
import { Grid,div,Row ,Col} from 'react-bootstrap'
import '../../Assets/css/style2.css';


export default class TotalSearchPieComponent extends React.Component{
    render()
    {
        return(
            <div className = "totalSearch">
                <div className="bgwhite">
                <div className ="combinesearch">
                <span className ="search">{this.props.searchCount}</span>
                <span className = "monthlysearch"> Total Searches This Month</span>
                </div>
                </div>
            </div>
        );
    }
}