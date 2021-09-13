import React, { Component } from "react";

import "./NaturalLink.scss";

class NaturalLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      link: "",
      isLoading: false,
      isShort: true,
      is9Qr: false,
      isShiny: false,
      type : ""
    };
  }

  onChangeInput = (e) => {
    this.setState({ input: e.target.value });
  };



  onHandleTypeClick = (e) => {
    if (e.target.name === "short") {
      this.setState({ isShort: true, is9Qr: false, isShiny: false,type:"isShort"});
    } else if (e.target.name === "9qr") {
      this.setState({ isShort: false, is9Qr: true, isShiny: false,type:"9Qr" });
    } else {
      this.setState({ isShort: false, is9Qr: false, isShiny: true,type:"isShiny" });
    }
  };

  render() {
    return (
      <div className="natural-container">
        <h1>Link Shortener</h1>
        <div className="input-container">
          <label>Enter a Link</label>
          <input
            value={this.state.input}
            onChange={(e) => this.onChangeInput(e)}
            type="url"
            placeholder="example.com"
          />
          <button onClick={() => this.props.onClickGoButton(this.state.input,this.state.type)} className="go">
            Go
          </button>
        </div>
        <div className="shortlink-type">
          {this.state.isShort  ? <button className="on" onClick={this.onHandleTypeClick} name="short">
            shrtco.de
          </button> : <button className="off" onClick={this.onHandleTypeClick} name="short">
            shrtco.de
          </button>}
          {this.state.is9Qr  ? <button className="on" onClick={this.onHandleTypeClick} name="9qr">
            9Qrco.de
          </button> : <button className="off" onClick={this.onHandleTypeClick} name="9qr">
            9Qrco.de
          </button>}
          {this.state.isShiny  ? <button className="on" onClick={this.onHandleTypeClick} name="shiny">
            Shinyco.de
          </button> : <button className="off" onClick={this.onHandleTypeClick} name="shiny">
            Shinyco.de
          </button>}
        </div>
        <p>
          With this free Link Shortener you can make Links shorter and easier to
          remember. Just enter a Link into the form and click on the above
          Button to generate a short Link. When visiting the short-Link, the
          short-Link will immediately redirect you to the long Link.
        </p>
      </div>
    );
  }
}

export default NaturalLink;
