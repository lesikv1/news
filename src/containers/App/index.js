import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

import './assert/styles.scss'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='heads'>
          <ul className='nav nav-pills'>
            <li className='main'><NavLink onlyActiveOnIndex={true} to='/' className='main'>Main</NavLink></li>
            <li className='admin'><NavLink to='/admin' className='admin'>Admin</NavLink></li>
            <li className='newsList'><NavLink to='/list' className='newsList'>News List</NavLink></li>
            <li className='login'><NavLink to='/login' className='login'>Sign in</NavLink></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}
