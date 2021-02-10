import React from 'react'

class BooksContainer extends React.Component {

  state = {sort: false}

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
    return (
      <div id="books-container">
        <input onChange={this.handleChange} type="checkbox" name="sort"/>
        <label>Sort Alphabetically</label>
        <ul>
            {this.state.sort ? [...this.props.titles].sort().map(title => <li key={title}>{title}</li>) : this.props.titles.map(title => <li key={title}>{title}</li>)}
        </ul>
      </div>
    )
  }
}

export default BooksContainer
