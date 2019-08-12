import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app">
        <header>
          <h1>NEWS</h1>
          <input type="text" placeholder="search.."/>
        </header>

        <Tab.Container defaultActiveKey="top-headlines" className="tab-container">
          <div className="tab-container">
            <div className="nav">
              <Nav className="flex-column">
                <Nav.Link className="nav-link" eventKey="top-headlines">Top Headlines</Nav.Link>
                <Nav.Link className="nav-link" eventKey="business">Business</Nav.Link>
                <Nav.Link className="nav-link" eventKey="entertainment">Entertainment</Nav.Link>
                <Nav.Link className="nav-link" eventKey="sports">Sports</Nav.Link>
                <Nav.Link className="nav-link" eventKey="health">Health</Nav.Link>
                <Nav.Link className="nav-link" eventKey="technology">Technology</Nav.Link>
              </Nav>
            </div>
            <div className="main-content">
              <Tab.Content>
                <Tab.Pane eventKey="top-headlines">
                  <div className="heading">TOP HEADLINES</div>
                </Tab.Pane>
                <Tab.Pane eventKey="business"><div className="heading">BUSINESS</div></Tab.Pane>
                <Tab.Pane eventKey="entertainment"><div className="heading">ENTERTAINMENT</div></Tab.Pane>
                <Tab.Pane eventKey="sports"><div className="heading">SPORTS</div></Tab.Pane>
                <Tab.Pane eventKey="health"><div className="heading">HEALTH</div></Tab.Pane>
                <Tab.Pane eventKey="technology"><div className="heading">TECHNOLOGY</div></Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
        
      </div>      
    );  
  }
  
}

export default App;
