import React, { Component } from "react";
import Header from "./components/parts/Header";
import About from "./components/pages/About";
import WebDev from "./components/pages/WebDev";
import Main from "./components/pages/Main";
import GameDev from "./components/pages/GameDev";
import Contact from "./components/pages/Contact";
import MyFooter from "./components/parts/Footer";
import "./styles/App.css";

class App extends Component {
  state = {
    currentPage: "Main"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage(){

    if(this.state.currentPage === "About"){
      return <About />
    }else if(this.state.currentPage === "WebDev"){
      return <WebDev />
    } else if(this.state.currentPage === "Contact"){
      return <Contact />
    } else if(this.state.currentPage === "GameDev"){
      return <GameDev />
    } else if(this.state.currentPage === "Main"){
      return <Main />
    }
  };

  render() {
    return (
    <div>
      <div className='container'>
    		<div className="row">
          <Header
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
    			<div className="col-md-12">
            {this.renderPage()}
    			</div>
    		</div>
    	</div>
      <MyFooter
      currentPage={this.state.currentPage}
      handlePageChange={this.handlePageChange}/>
    </div>
    );
  }
}

export default App;
