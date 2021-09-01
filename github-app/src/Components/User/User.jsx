import React from "react";
import "./User.scss";
function User(props) {

  const onClickMore = () => {
    const {login} = props
    props.history.push(`/User/${login}`)
    props.onClickUser(login)
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
