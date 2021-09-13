import React, { Component } from "react";
import NaturalLink from "./Components/NaturalLink";
import ShortLink from "./Components/ShortLink";
import "./App.css";
import Data from "./Data/Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      isFinish : false 
    };
  }

  onClickGoButton = async (search, type) => {
    let res = await Data.getData(search);
    console.log(res.data.result);
    if (type === "isShort") {
      this.setState({ link: res.data.result.short_link, isFinish : true }, () =>
        console.log(this.state.link)
      );
    } else if (type === "9Qr") {
      this.setState({ link: res.data.result.short_link2,isFinish : true  }, () =>
        console.log(this.state.link)
      );
    } else {
      this.setState({ link: res.data.result.short_link3,isFinish : true  }, () =>
        console.log(this.state.link)
      );
    }
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ color: "white", marginLeft: "7%" }}>
          {" "}
          The privacy-friendly URL Shortener{" "}
        </h1>
        <NaturalLink onClickGoButton={this.onClickGoButton} />
        {this.state.isFinish ? <ShortLink link={this.state.link}/> : null}
      </div>
    );
  }
}

export default App;
