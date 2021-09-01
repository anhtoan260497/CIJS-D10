import React, { Component } from "react";
import "./UserInfo.scss";
import UserBio from "../../Components/UserBio";
import userAPI from "../../Services/User";
import UserRepo from "../../Components/UserRepo";
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userBio: {},
      userRepo : []
    };
  }

  componentDidMount = async () => {
    let resBio = await userAPI.userBio(this.props.clickUser);
    let resRepo = await userAPI.userRepo(this.props.clickUser);
    this.setState({ userBio: resBio.data,userRepo:resRepo.data});
  };

  onBackToTop = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="user-info">
        <div className="back-to-home">
          <button onClick={this.onBackToTop}>Back to Home</button>
          <h4>
            Hierable: {"  "}
            <img src={process.env.PUBLIC_URL + "/image/true.png"} alt="" />
          </h4>
        </div>
        <UserBio userBio={this.state.userBio} />
        <UserRepo userRepo={this.state.userRepo}/>
      </div>
    );
  }
}

export default UserInfo;
