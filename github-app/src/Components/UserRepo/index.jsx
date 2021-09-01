import React from "react";
import './UserRepo.scss'
function UserRepo(props) {
console.log(props)
    const renderRepo = () => {
        return props.userRepo.map(el => {
            return (
                <div className="user-repository" key={el.id}>
                <a className="repo-name" href={`https://github.com/${el.full_name}`}>{el.name}</a>
                <p className="fork-form">Fork Form:  <a href={el.forks_url}>{el.forks_url}</a></p>
                <p className="description">{el.description}</p>
            </div>
            )
        })
    }
  return (
    <div className="user-repo">
      <h3>Repositories</h3>
      <div className="repo">
       {renderRepo()}
      </div>
    </div>
  );
}

export default UserRepo;
