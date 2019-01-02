import React, { Component } from 'react';

class Header extends Component {
    state = {
        category: ''
    }
    setNewsCategory = (categoryClicked) => {
        this.setState({category: categoryClicked});
    }

    render() {
        return (            
            <nav className="navbar navbar-default yamm navbar-fixed-top" role="navigation" id="inheadlines-navbar">
            <div className="container">     
            <div className="navbar-brand">
            world wide news
            </div>       
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
            </button>            
            </div>
            
            <ul class="navigation">
                <li>
                <a href="#" onClick={() => { this.setNewsCategory("Politics"); }}>
                    Politics
                </a>
            </li>                
            <li>
                <a href="#">
                    Business
                </a>
            </li>   
            <li>
                <a href="#">
                    Sports
                </a>
            </li>   
            <li>
                <a href="#">
                    Entertainment
                </a>
            </li>   
                        <li>
                            <a href="#">
                                Environment
                </a>
                        </li>   
            </ul>
            
            
            </div>
            </nav>
            )
        }
    }
    export default Header;