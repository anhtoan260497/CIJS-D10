import React, { Component } from 'react';
import './SearchBar.scss'

class SearchBar extends Component {


    render() {
        return (
            <div className="search">
                <input name="search"  autoComplete="off" onChange={e=>this.props.onSearch(e)} value={this.props.search} placeholder="Search Film"/>
            </div>
        );
    }
}

export default SearchBar;