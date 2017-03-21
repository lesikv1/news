import React, { Component } from 'react'

export default class Genre extends Component {
  render() {
    let template;
    if (this.props.params.release) {
      template = (
        <div className='row'>
          <h3 className='col-md-12'>{this.props.params.genre}</h3>
          <div className='col-md-12'>{this.props.children}</div>
        </div>
      )
    } else {
      template = (
        <div className='row'>
          <h3 className='col-md-12'>{this.props.params.genre}</h3>
        <hr />
          <div className='col-md-12'><h1>Here is the list of news</h1></div>
        </div>
      )
    }

    return template;
  }
}
