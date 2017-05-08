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
            <li className='newsList'><NavLink to='/list' className='newsList'>News List</NavLink></li>
            <li className='country'><NavLink to='/country' className='country'>Country</NavLink></li>
            <li className='signin'><NavLink to='/signin' className='signin'>Sign In</NavLink></li>
            <li className='signup'><NavLink to='/signup' className='signup'>Sign Up</NavLink></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}
