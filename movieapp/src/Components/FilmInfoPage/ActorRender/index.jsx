import React, { Component } from "react";
import Data from "../../../Data/Data";
import "./ActorRender.scss";
import ActorTag from "./ActorTag";

class ActorRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
    };
  }

  componentDidMount = async () => {
    let resActors = await Data.getActors(this.props.id);
    let newActors = [];
    if (resActors.data.cast.length >= 24) {
      for (let i = 0; i < 24; i++) {
        newActors.push(resActors.data.cast[i]);
      }
      this.setState({ actors: newActors });
    } else {this.setState({actors:resActors.data.cast})}
  };

  renderActors = () => {
    return this.state.actors.map((el, idx) => {
      return <ActorTag actorInfo={el} key={idx} />;
    });
  };

  render() {
    return <div className="actor-container">{this.renderActors()}</div>;
  }
}

export default ActorRender;
