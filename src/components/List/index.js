import React, { Component } from 'react'
import { Link } from 'react-router'

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
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <h3> List of genres </h3>
          </div>
        </div>
        <div className='row'>
        <div className='col-md-12'>Section /</div>
        <form className='col-md-4' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='genreName'/>
          <button type='submit'>Go to</button>
        </form>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-12'>
            <ul className='list'>
              <li className='list__item'>
                <Link to='/genre/world/'>In world</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/policy/'>Policy</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/business/'>Business</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/sport/'>Sport</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/auto/'>Auto</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/science/'>Science</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/finance/'>Finance</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/property/'>Property</Link>
              </li>
              <li className='list__item'>
                <Link to='/genre/conflicts/'>Conflicts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
