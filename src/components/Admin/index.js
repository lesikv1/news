import React, { Component } from 'react'

import './assert/styles.scss'

export default class Admin extends Component {
  static onEnter(nextState, replace) {
    const login = window.localStorage.getItem('rr_login')
    if (login !== 'admin') {
      replace('/')
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'> <h1> Section /admin </h1></div>
      </div>
    )
  }
}
