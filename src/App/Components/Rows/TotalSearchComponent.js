import React, { Component } from 'react'
import { Grid,div,Row ,Col} from 'react-bootstrap'


export default class TotalSearchComponent extends React.Component{
    render()
    {
        return(
            <div className = "totalSearch">
                <div className="bgwhite">
                <div className ="combinewalletsearch">
                <div className ="search">{this.props.count}</div>
                <div className = "monthlysearch"> {this.props.title}</div>
                </div>
                </div>
            </div>
        );
    }
}