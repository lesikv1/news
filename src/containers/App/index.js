import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

import './assert/styles.scss'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li className='main'><NavLink onlyActiveOnIndex={true} to='/'>Main</NavLink></li>
          <li className='admin'><NavLink to='/admin'>Admin</NavLink></li>
          <li className='newsList'><NavLink to='/list'>News List</NavLink></li>
          <li className='login'><NavLink to='/login'>Sign in</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
