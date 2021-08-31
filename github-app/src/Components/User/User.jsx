import React from "react";
import "./User.scss";
function User(props) {

  const onClickMore = () => {
    const {login} = props.match.params
    console.log(props.history)
    console.log(props.match)
    props.history.push("/User/")
  };

  return (
    <div className="user">
      <img src={props.userInfo.avatar_url} alt="" key={props.userInfo.id} />
      <p>{props.userInfo.login}</p>
      <button onClick={onClickMore}>More</button>
    </div>
  );
}

export default User;
