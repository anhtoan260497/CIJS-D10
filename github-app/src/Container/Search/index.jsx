import React, { Component } from "react";
import SearchUser from "../../Components/SearchUser/SearchUser";
import User from "../../Components/User/User";
import userAPI from "../../Services/User";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      isShowClearUser: false,
      isShowWarning: false,
      isShowLoading : false,
    };
  }

  searchUser = async (search) => {
    if (search === "") {
      this.setState({ isShowWarning: true }, () => {
        setTimeout(() => {
          this.setState({ isShowWarning: false });
        }, 2000);
      });
      return;
    }
    
    this.setState({isShowLoading:true,user:[]})
    let res = await userAPI.searchUser(search);
    this.setState({ user: res.data.items, isShowClearUser: true,isShowLoading:false });
  };
  renderSearchUser = () => {
    return this.state.user.map((el) => {
      return <User userInfo={el} key={el.id} history={this.props.history} match={this.props.match}/>;
    });
  };

  onClearSearch = () => {
    this.setState({ user: [], isShowClearUser: false });
  };

  render() {
    return (
      <div>
        <SearchUser
          onSubmitSearch={this.onSubmitSearch}
          isShowWarning={this.state.isShowWarning}
          onClearSearch={this.onClearSearch}
          isShowClearUser={this.state.isShowClearUser}
          searchUser={this.searchUser}
        />
        <div className="user-container">
          {this.state.isShowLoading ? <img src="https://media1.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=ecf05e47h3paux1u0sjjgbc75wgsfm2xaol0jhmzyp85d3oo&rid=giphy.gif&ct=g" alt="" /> : null}
          {this.renderSearchUser()}
        </div>
      </div>
    );
  }
}

export default Search;
