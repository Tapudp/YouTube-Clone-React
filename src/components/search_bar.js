import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
   constructor(props){
      super(props);

      this.state = {term: 'Starting Value'};
   }

   render(){
      return (
         <div>
            <input 
            value={this.state.term} 
            onChange = {event => this.setState({ term: event.target.value })} />
            Value of input: {this.state.term}
         </div>
      );
   }

   // onInputChange(event) {
   //    console.log(event);
   // }
};

export default SearchBar;