import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';

import './assert/styles.scss'

export default class Home extends Component {
 
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <div className='row'>
        <h2>Slider News</h2>
      <hr/>
        <div className='slider'>
          <Slider {...settings}>
            <div className='img1'/>
            <div className='img2'/>
            <div className='img3'/>
            <div className='img4'/>
          </Slider> 
        </div>
      <hr />
      <h2>News today</h2>
      <hr />
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className='min1'/>
          <div className="caption">
            <h3>UN will hold a meeting</h3>
            <p>UN will hold a meeting in honor of Vitaly Churkin</p>
            <p><a href="#" className="btn btn-primary" role="button">Read</a></p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className='min2'/>
          <div className="caption">
            <h3>Bloody meat mincers near Kominternovo</h3>
            <p>The ukraine has lost at least 10 people killed during the failed attack</p>
            <p><a href="#" className="btn btn-primary" role="button">Read</a></p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className='min3'/>
          <div className="caption">
            <h3>Battles broke out under Donetsk and Dokuchaevsk</h3>
            <p>Battles broke out near Donetsk and Dokuchaevsk, Ukraine applied artillery</p>
            <p><a href="#" className="btn btn-primary" role="button">Read</a> </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className='min4'/>
          <div className="caption">
            <h3>The Russian army entered the Afrin</h3>
            <p>The column of Russian military equipment entered the Kurdish enclave of Afrin in the Syrian province of Aleppo.</p>
            <p><a href="#" className="btn btn-primary" role="button">Read</a> </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className='min5'/>
          <div className="caption">
            <h3>First sanctions will be removed by the US</h3>
            <p>Head of Intesa: "First, sanctions will be removed by the US, and then - by Europe"</p>
            <p><a href="#" className="btn btn-primary" role="button">Read</a> </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <div className='min6'/>
          <div className="caption">
            <h3>Virus in ATMs</h3>
            <p>Contactless cards in ATMs threatens to lose $ 2 billion</p>
            <p><a href="#" className="btn btn-primary" role="button">Read</a> </p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}
