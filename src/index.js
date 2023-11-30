import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//components
import Header from './components/header';
import NewsList from './components/new_lists';

class App extends Component{
  state ={
    news: JSON,
    filtered:[]
  }
  getKeywords = (event) =>{
    // console.log(event.target.value)
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keyword) > -1

    });
    this.setState({
      filtered
    })
  }
  render(){
    let newFilter= this.state.filtered;
    let newNews= this.state.news;
            return (
          <div>
        <Header keywords={this.getKeywords}/>
        <NewsList news={newFilter.length === 0 ? newNews : newFilter}>
          <h3>The News are </h3>
          </NewsList>
          </div>
        )
}
}
ReactDOM.render(<App/>,document.querySelector('#root'));