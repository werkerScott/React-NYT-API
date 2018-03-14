// import React from "react";
import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Input } from "../../components/Form";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Results from "../../components/Results";



class Home extends Component {
    state = {
      articles: [],
    };

  
    render() {
      return (
        <div>
            <Hero>
            <h1>New York Times Articleizer</h1>
            <h2>Search and Save</h2>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <p> I am the Home page </p>
                
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"> Search Parameters</h3>
                            </div>
                            <div className="panel-body">
                                <form className="form">
                                    <label>Search Term</label>
                                    <Input
                                        // value={}
                                        name="searchTerm"
                                        // onChange={}
                                        type="text"
                                    />
                                    
                                    <label>Start Year</label>
                                    <Input
                                        // value={}
                                        name="startYear"
                                        // onChange={}
                                        type="text"
                                    />
                                    
                                    <label>End Year</label>
                                    <Input
                                        // value={}
                                        name="endYear"
                                        // onChange={}
                                        type="text"
                                    />
                                
                                    <button className="btn btn-info"> Search </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Results />
            </Container>
        </div>         
        
      );
    }
  }

export default Home;

