import React, { Component } from 'react';
import './SearchBar.scss'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            search:""
        }
    }

    onSearch = e => {
        this.setState({search:e.target.value})
    }

    render() {
        return (
            <div className="search">
                <input name="search" onChange={e=>this.onSearch(e)} value={this.state.search} placeholder="Search Film"/>
            </div>
        );
    }
}

export default SearchBar;