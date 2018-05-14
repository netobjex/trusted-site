import React, {Component} from 'react';
import { Image, Grid, Row, Col, Button } from "react-bootstrap"; 
import SearchStudentCredentialComponent from './SearchStudentCredentialComponent';
import TitleRow from '../../Rows/TitleRow';
import SearchResultRow from '../../Rows/SearchResultRow';
import TEDRemainingComponent from './TEDRemainingComponent';

export default class SearchComponent extends React.Component {
    resultList = [];
    constructor(props) {
        super(props);

        this.state = {
            searchResult : 4
        }

        let students = [{name:"John D. Smith", address:"Rowland Heights, CA"},
                         {name:"John D. Smith", address:"Santa Monica, CA"},  
                         {name:"John D. Smith", address:"San Jose, TX"},
                         {name:"John D. Smith", address:"Boston, MA"} 
                            ]

                            for(var i = 0; i < this.state.searchResult; i++) {
                                this.resultList.push(<SearchResultRow
                                name={students[i].name}
                                address={students[i].address}
                                onHandleLinkClick={this.handleLink.bind(students[i].name)}
                                key={i}
                                />);
                            }
    }   

    handleSearchCredential() {

    }

    handleLink(name) {
        console.log("in handle link:", name);
    }


    render() {
        return(
            <div>
                <h2>Search for Student Credentials</h2>
                 <Row className="search-row">
                    <Col className="search-col">
                        <SearchStudentCredentialComponent
                            onSearchCredential={this.handleSearchCredential.bind(this)}
                        />
                    </Col>
                    <Col className="teds-column">
                        <TEDRemainingComponent
                            teds_remaining="12"
                            title="TED Credits Remaining"
                            btnLabel =" Order More"
                        />
                    </Col>
                </Row>
                <div className="result-row">
                    <div className="bgwhite">
                            <TitleRow
                            title="Search Results"
                            sortOption="Best Match"/>
                            {this.resultList}
                    </div>
                </div>
            </div>
        );
    }
}