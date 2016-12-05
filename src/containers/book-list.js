/**
 * Created by Harmeet Singh on 12/5/2016.
 */
import React, { Component } from 'react';

export default class BookList extends Component {
  
  renderList() {
    return this.props.books.map(( book ) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
};