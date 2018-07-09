import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import style from "../css/form.css";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const id = Math.random()
      .toString(36)
      .substr(2, 16);
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <div className="divStyle">
        <form onSubmit={this.handleSubmit} className="form-inline formStyle">
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
            className="form-control mr-2"
          />
          <button type="submit" className="btn btn-success ml-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
