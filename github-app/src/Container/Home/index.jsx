import React, { Component } from "react";
import User from "../../Components/User/User";
import UserAPI from "../../Services/User";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount = async () => {
    let res = await UserAPI.allUser();
    this.setState({ user: res.data });
  };

  renderAllUser = () => {
    return this.state.user.map((el) => {
      return <User userInfo={el} history={this.props.history} login={el.login} onClickUser={this.props.onClickUser} key={el.id}/>;
    });
  };

  render() {
    return <div className="user-container">{this.renderAllUser()}</div>;
  }
}

export default Home;
