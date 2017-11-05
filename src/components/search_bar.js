import React from 'react';

//it is a functional component. it is a simple component. props is the argument
/*
  const SearchBar = ()=>{
    return <input />; //the html for user to type something
  };
*/

//class component : internal recored keeping, or need to re-render itself. like be aware of what happed to itself when render.
class SearchBar extends React.Component{
  //it means searchbar now have the access to all the functionality the React.component have
  //every class based component we created, must have a render method
  //every class based component, props are avaliable anywhere, in any method we defined as 'this.props'.
  //When refactory a component from functional to class based, we should replace all 'props' to 'this.props'

  /*
    state is a js object that use to record and react to user events. Each Class based componenet we defined has its own state object. Whenever the state of the component change, the componenet and it's childern get re-render immediately

    first, initialize the state object. we set the property state to a plain js object inside of the class's constructor method.
  */
  constructor(props){
    //it is the first and the only function called automatically, whenever a new instance was created
    super(props);
    this.state = { term: ''}; //initialize the state by create a new object, and assign it to this.state.
  }
  render(){//the value attribute turns the input to a controlled component.
    return (
      <div className='search-bar'>
        {/* <input
        value = {this.state.term}
        onChange={this.onInputChange.bind(this)} />*/}
        <input
        value = {this.state.term}
        onChange={e =>this.onInputChange(e.target.value)} />
      </div>
    );
    //return <input onChange={(e) => this.setState({term : e.target.value})} />; use arrow function to
    //avoid bind the context
  }

  // onInputChange(e){
  //   //change the state use '.setState()'
  //   this.setState({term : e.target.value});
  // }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


}

export default SearchBar;
