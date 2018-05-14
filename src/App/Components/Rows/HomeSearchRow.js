import React,{ Component } from 'react';
import { Button,Row,Col } from "react-bootstrap";

export default class HomeSearchRow extends React.Component{
    render()
    {
        return(
            <Row className = "home-search-row">
            <div className ="bgwhite">
                 <Col className = "search-col" sm={6} md={6} lg={8} xs={6}> 
              
                {this.props.title}
                </Col>
                <Col className = "search-btn-col" sm={6} md={6} lg={4} xs={6}>
                <Button
                block
                bsSize = "large"
                onClick = {this.btnClick()}
                className = "btn-home-search"
                >{this.props.buttonTitle}</Button>
                </Col>
                </div>
               
            </Row>
        );
    }

    btnClick()
    {

    }
}