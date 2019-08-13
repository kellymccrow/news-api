import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav'
import Article from './Article';
import './App.css';

var keyCode = '84c476e4bd504a2e9fe3071d392e8aa1';
var key = '?apiKey='+keyCode;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      topArticles: [],
      businessArticles: [],
      entertainmentArticles: [],
      sportsArticles: [],
      healthArticles: [],
      technologyArticles: [],
      searchArticles: [],

      searchInput: '',

      activeKey:'business'
    }
  }

  loadTopHeadlines(){
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&country=us';
    fetch(articlesURL)
      .then( res => res.json())
      .then((data)=>{
        var articles = data.articles;
        this.setState({topArticles: articles});
      })
  }

  loadHeadlinesByCategory(category){
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&category='+category+'&country=us';
    fetch(articlesURL)
      .then( res => res.json())
      .then((data)=>{
        var articles = data.articles;

        if(category == 'business'){
          this.setState({businessArticles:articles});  
        }
        if(category == 'entertainment'){
          this.setState({entertainmentArticles:articles});  
        }
        if(category == 'sports'){
          this.setState({sportsArticles:articles});  
        }
        if(category == 'health'){
          this.setState({healthArticles:articles});  
        }
        if(category == 'technology'){
          this.setState({technologyArticles:articles});  
        }
        
        
      })
  }

  componentDidMount(){
    this.loadTopHeadlines();
    this.loadHeadlinesByCategory('business');
    this.loadHeadlinesByCategory('entertainment');
    this.loadHeadlinesByCategory('sports');
    this.loadHeadlinesByCategory('health');
    this.loadHeadlinesByCategory('technology');
  }

  loadHeadlinesByTerm(term){
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&q='+term;
    fetch(articlesURL)
      .then(res => res.json())
      .then((data) => {
        var articles = data.articles;
        this.setState({searchArticles:articles});

      })
  }

  handleSearchInputChange = (e) => {
    this.setState({searchInput: e.target.value});
  }

  handleSearchClick = (e) => {
    e.preventDefault();
    var term = this.state.searchInput;
    this.loadHeadlinesByTerm(term);

    this.setState({activeKey: 'search'});
  }
  handleTabSelect = (key) => {
    this.setState({activeKey: key});
  }

  render(){
    return (
      <div className="app">
        <header>
          <h1>NEWS</h1>
          <div className="searchbar">
            <input type="text" placeholder="search.." onChange={this.handleSearchInputChange}/>
            <button type="submit" onClick={this.handleSearchClick}><i class="fas fa-search"></i></button>
          </div>
        </header>

        <Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect} className="tab-container">
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
                  <div className="article-container">
                    {
                      this.state.topArticles.map((article) => {

                        var articleProps = {
                          ...article,
                          key: Math.random()
                        };

                        return(
                          <Article {...article} />
                        )
                      })
                    }
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="business">
                  <div className="heading">BUSINESS</div>
                  <div className="article-container">
                 
                    {
                      this.state.businessArticles.map((article) => {

                        var articleProps = {
                          ...article,
                          key: Math.random()
                        };

                        return(
                          <Article {...article} />
                        )
                      })
                    }

                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="entertainment">
                  <div className="heading">ENTERTAINMENT</div>
                  <div className="article-container">
                 
                    {
                      this.state.entertainmentArticles.map((article) => {

                        var articleProps = {
                          ...article,
                          key: Math.random()
                        };

                        return(
                          <Article {...article} />
                        )
                      })
                    }

                  </div>
                  
                </Tab.Pane>
                <Tab.Pane eventKey="sports">
                  <div className="heading">SPORTS</div>
                  <div className="article-container">
                 
                    {
                      this.state.sportsArticles.map((article) => {

                        var articleProps = {
                          ...article,
                          key: Math.random()
                        };

                        return(
                          <Article {...article} />
                        )
                      })
                    }

                  </div>
                  
                </Tab.Pane>
                <Tab.Pane eventKey="health">
                  <div className="heading">HEALTH</div>
                  <div className="article-container">
                 
                    {
                      this.state.healthArticles.map((article) => {

                        var articleProps = {
                          ...article,
                          key: Math.random()
                        };

                        return(
                          <Article {...article} />
                        )
                      })
                    }

                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="technology">
                  <div className="heading">TECHNOLOGY</div>
                  <div className="article-container">
                 
                    {
                      this.state.technologyArticles.map((article) => {

                        var articleProps = {
                          ...article,
                          key: Math.random()
                        };

                        return(
                          <Article {...article} />
                        )
                      })
                    }

                  </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="search">
                  <div className="heading">Search results</div>
                  <div className="article-container">
                 
                    {
                      this.state.searchArticles.map((article) => {

                        var articleProps = {
                          ...article,
                          key: Math.random()
                        };

                        return(
                          <Article {...article} />
                        )
                      })
                    }

                  </div>
                  </Tab.Pane>

              </Tab.Content>

              
            </div>
          </div>
        </Tab.Container>
        
      </div>      
    );  
  }
  
}

export default App;
