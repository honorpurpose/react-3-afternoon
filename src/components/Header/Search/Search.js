import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchInput: ''
    }

    this.handleChange = this.handleChange.bind( this )
  }

  handleChange(val){
    const { set } = this.props
    set(val)
  }
  
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input onChange={ (e) => this.handleChange( e.target.value ) } placeholder="Search Your Feed" />

          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}