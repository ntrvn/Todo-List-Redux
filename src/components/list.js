import React from "react";
import { connect } from "react-redux";
import Del from "./deleteElement";
import "../css/list.css";
import Sortable from "react-sortablejs";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => {
  const list = articles.map(el => (
    <li key={el.id} className="list-group-item">
      <div className="row">
        <div className="col-7 linHeight">
          <p className="noMarginBottom">{el.title}</p>
        </div>
        <div className="col-5">
          <Del name={el.title} id={el.id} />
        </div>
      </div>
    </li>
  ));
  return (
    <div className="container listDivStyle">
      <Sortable
        option={{ animation: 150 }}
        className="block-list list-group"
        ref={c => {
          if (c) {
            this.list = c.sortable;
          }
        }}
        tag="ul"
      >
        {list}
      </Sortable>
    </div>
  );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
