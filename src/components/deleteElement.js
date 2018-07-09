import React, { Component } from "react";
import { connect } from "react-redux";
import { delArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    delArticle: article => dispatch(delArticle(article))
  };
};

class DeleteArticle extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.props.name;
    const id = this.props.id;
    console.log(title);
    console.log(id);
    this.props.delArticle({ title, id });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit} className="btn btn-danger">
          Delete
        </button>
      </div>
    );
  }
}

const Del = connect(
  null,
  mapDispatchToProps
)(DeleteArticle);

export default Del;
