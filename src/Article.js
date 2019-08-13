import React, {Component} from 'react';

class Article extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="article">
                <div className="title">
                    {this.props.title}
                </div>
                <img src={this.props.urlToImage}></img>
                <div className="source">
                    {this.props.source.name}
                </div>
            </div>
        );
    }
}

export default Article;