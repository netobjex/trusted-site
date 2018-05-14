import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import SideMenu from '../SideMenu/SideMenu';
//import '../../Assets/css/style.css';
import '../../Assets/css/style2.css';
import TedTokenComponent from './DivComponents/TedTokenComponent'
import TedCreditComponent from './DivComponents/TedCreditComponent'

//import {BarChart} from 'react-easy-chart';
//import { QRCode } from 'qrcode.react'
//var QRCode = require('qrcode.react');
import QRCodeComponent from './DivComponents/QRCodeComponent'

export default class WalletContainer extends React.Component {

    
    render() {
        
           
            
         
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12} md={12} lg={3} xs={12} className="side-menu">
                            <SideMenu
                                path="/wallet" />
                        </Col>

                        <Col sm={12} md={6} lg={6} xs={12} className="wallet-main">
                            <h1>My Wallet</h1>
                           <Row classID = "combineTedCredit">
                            <Col xs={12} sm={12} md={6} lg={6}  className="tedComponent">
                                <TedTokenComponent
                                    teds_count="3"
                                    subTitle="TED Tokens (TED) Remaining"
                                    text="1 TED = 100 TCRD" />

                            </Col>
                           
                            <Col xs={12} sm={12} md={6} lg={6} className = "creditComponent">
                                <TedCreditComponent
                                    credit_count="12"
                                    creditTitle="TED Credit (TCRD) Remaining"
                                />
                        </Col>
                        </Row>
                            
                        
                        
                        {/*  
<div className ="chart">
<h2>Current Earnings vs Current Spends</h2>
                            <BarChart
                            
   height={260}
   width={740}
   axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
    axes
    grid
    interpolate={'cardinal'}
    y2Type="linear"
    lineData={[
        {
            x: '5 Weeks Ago',
            y: 7,
            color:'#D5AFC3',
          },
          {
            x: '4 Weeks Ago',
            y: 9,
            color:'#D5AFC3',
          },
          {
             x:'3 Weeks Ago',
             y: 7,
             color:'#D5AFC3',
           },
           {
             x:'2 Weeks Ago',
             y: 10,
             color:'#D5AFC3',
           },
           {
             x:'Last Week',
             y: 7,
             color:'#D5AFC3',
           },
           {
             x: 'This Week',
             y: 5,
             color:'#D5AFC3',
           }
      ]}
   data={[
     {
       x: '5 Weeks Ago',
       y: 6,
       color:'#8D265D',
     },
     {
       x: '4 Weeks Ago',
       y: 8,
       color:'#8D265D',
     },
     {
        x:'3 Weeks Ago',
        y: 8,
        color:'#8D265D',
      },
      {
        x:'2 Weeks Ago',
        y: 5,
        color:'#8D265D',
      },
      {
        x:'Last Week',
        y: 12,
        color:'#8D265D',
      },
      {
        x: 'This Week',
        y: 10,
        color:'#8D265D',
      }
   ]}
  />
  </div>
*/}                     
                        </Col>
                        <Col sm={12} md={12} lg={3} xs={12} className="qrCodeCol">
                        <div className ="qrCodeComponent">
                            <QRCodeComponent
                            title ="Your TED Address"/>
                        </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}