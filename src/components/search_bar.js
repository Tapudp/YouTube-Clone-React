import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
   constructor(props){
      super(props);

      this.state = {term: 'Starting Value'};
   }

   render(){
      return (
         <div className="search-bar">
            <input 
            value={this.state.term} 
            onChange = {event => this.onInputChange(event.target.value)} />
            Value of input: {this.state.term}
         </div>
      );
   }

   onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
   }

   // onInputChange(event) {
   //    console.log(event);
   // }
};

export default SearchBar;