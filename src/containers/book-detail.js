import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className="col-md-8">
        <h3>Detail for:</h3>
        <div>{book ? `Title: ${book.title}` : "Select a book to get started."}</div>
        <div>{book ? `Pages: ${book.pages}` : null}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);