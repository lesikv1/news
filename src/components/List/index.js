import React, { Component } from 'react';
import { Link } from 'react-router';

import './assert/styles.scss'

export default class List extends Component {
  
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const value = e.target.elements[0].value.toLowerCase()
    this.context.router.push(`/genre/${value}`)
  }
  
  render() {
    return (
      <div className='pois'>
        <div className='row'>
          <div className='col-md-12'>
            <h1> List of genres </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'><h3>Section /</h3></div>
        <form className='col-md-4' onSubmit={this.handleSubmit}>
          <input type='text' className='form-control' placeholder='genreName'/>
          <hr />
          <button type='submit' className='btn btn-primary'>Go to</button>
        </form>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-12'>
            <ul className='list'>
              <li className='list__item'>
                <Link to='/genre/world/' className='btn btn-info'>In world</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/policy/' className='btn btn-info'>Policy</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/business/' className='btn btn-info'>Business</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/sport/' className='btn btn-info'>Sport</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/auto/' className='btn btn-info'>Auto</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/science/' className='btn btn-info'>Science</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/finance/' className='btn btn-info'>Finance</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/property/' className='btn btn-info'>Property</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/conflicts/' className='btn btn-info'>Conflicts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
