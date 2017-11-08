import React from 'react';

class SearchBar extends React.Component {
  constructor( props ) {
    super(props);
    this.state = { term: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    this.setState({ term: e.target.value });
    this.props.onSearchInput(e.target.value);
  }



  render() {
    return (
      <div className="search-bar">
        <input type="text" onChange={this.handleInputChange}/>
        <br/>
      </div>
    );
  }


}

export default SearchBar;
