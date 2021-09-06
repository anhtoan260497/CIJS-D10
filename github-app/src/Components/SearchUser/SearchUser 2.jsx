import React, { Component } from "react";
import "./SearchUser.scss";
class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onChangeSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  onSubmitSearch = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <div className="search-container">
        {this.props.isShowWarning ? (
          <h3 className="warning">You must enter keywords</h3>
        ) : null}
        <form onSubmit={(e) => this.onSubmitSearch(e)}>
          <input
            placeholder="Enter Search Keyword"
            name="search"
            value={this.state.search}
            onChange={this.onChangeSearch}
          />
          <button className="btn btn-search" type="submit">
            Search
          </button>
        </form>
        {this.props.isShowClearUser ? (
          <button className="btn btn-clear" onClick={this.props.onClearSearch}>
            Clear Search
          </button>
        ) : null}
      </div>
    );
  }
}

export default SearchUser;
