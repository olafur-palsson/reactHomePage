import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input"

class TestContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    const { seo_title } = this.state
    return (
      <form className="shitbro">
        <h1>YouCraycraybro</h1>
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        ></Input>
      </form>
    );
  }
}

export default TestContainer;
