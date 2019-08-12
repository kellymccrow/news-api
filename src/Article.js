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
                <div className="image">
                    {this.props.image}
                </div>
                <div className="source">
                    {this.props.source}
                </div>
            </div>
        );
    }
}

export default Article;