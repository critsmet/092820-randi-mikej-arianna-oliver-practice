import React from 'react';
import './App.css';

import BooksContainer from './BooksContainer'

let url = "https://www.googleapis.com/books/v1/volumes?q="

class App extends React.Component {

  state = {titles: [], sort: false}

  componentDidMount(){
    fetch(url + "coding")
      .then(res => res.json())
      .then(respObj => {
        let titles = respObj.items.map(item => item.volumeInfo.title)
        this.setState({titles}, () => console.log(this.state))
      })
  }
  // componentShouldUpdate
  // componentDidUpdate
  // componentWillUnmount

  handleChange = (event) => {
    let checked = event.target.checked
    this.setState({sort: checked})
    // if (checked){
    //     //alphabetize
    //     this.state.titles.sort()
    // } else {
    //   //?
    // }
  }

  render(){
    return(
      <div className="App">
        <form>
          <input type="text" name="term" />
          <input type="submit" value="Search for Books!" />
        </form>
        <br/>
        <BooksContainer titles={this.state.titles}/>
      </div>
    )
  }
}


export default App;
