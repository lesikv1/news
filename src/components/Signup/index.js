import React, {Component} from 'react';

import './assets/styles.scss'

export default class Signup extends Component {

	render() {
		return(
			<div className='signups'>
				<h1>signup</h1>
			<input
				type='text'
				name='login'
				className='form-control'
				placeholder='login'/>
			<input
				type='text'
				name='password'
				className='form-control'
				placeholder='password'/>
			<hr />
			<button
				className='btn btn-primary'
				onClick={this.getApi}>Signup</button>
			</div>
		);
	}
}
