import React, {Component} from 'react';

import './assets/styles.scss';

export default class Signin extends Component {
	render() {
		return(
			<div className='signins'>
			<h1>signin</h1>
			<input type='text' className='form-control' placeholder='login'/>
			<input type='text' className='form-control' placeholder='password'/>
			<hr />
			<button className='btn btn-primary'>Signin</button>
			</div>
		);
	}
}