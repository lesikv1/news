import React, { Component, PropTypes } from 'react'

import './assert/styles.scss'

export default class Login extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const login = e.target.elements[0].value
    window.localStorage.setItem('rr_login', login)

    if (login === 'admin') {
      this.context.router.push('/admin')
    } else {
      this.context.router.push('/')
    }
  }
  render() {
    return (
      <div className='logins'>
        <div className='row'>
          <div className='col-md-12'><h1>Please enter your login:</h1></div>
          <form className='col-md-4' onSubmit={this.handleSubmit}>
            <hr />
            <input type='text' className='form-control' placeholder='login'/>
            <hr />
            <button type='submit' className='btn btn-primary'>Sign in</button>
          </form>
        </div>
      </div>
    )
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}
