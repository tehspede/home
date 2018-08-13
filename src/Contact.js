import React, { Component } from 'react'
import { Section } from 'react-fullpage'

import 'font-awesome/css/font-awesome.css'

export default class Contact extends Component {
  render () {
    return (
      <Section className='text-center'>
        <h2>Contact me!</h2>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <i className='fa fa-phone fa-lg' />{' '}
            <a href='tel:+358409372211'>+358 40 9372211</a>
          </li>
          <li className='list-inline-item'>
            <i className='fa fa-envelope fa-lg' />{' '}
            <a href='mailto:aleksi@kulta.us'>aleksi@kulta.us</a>
          </li>
          <li className='list-inline-item'>
            <i className='fa fa-home fa-lg' />{' '}
            <a href='https://www.google.com/maps?q=Vaasa,+Finland'>
              Vaasa, Finland
            </a>
          </li>
          <li className='list-inline-item'>
            <i className='fa fa-linkedin-square fa-lg' />{' '}
            <a href='https://www.linkedin.com/in/aleksigold'>Aleksi Gold</a>
          </li>
        </ul>
        <div className='info'>
          <p>
            This website was built with&nbsp;
            <a href='https://reactjs.org/'>React</a>,{' '}
            <a href='https://github.com/subtirelumihail/react-fullpage'>
              react-fullpage
            </a>,&nbsp;
            <a href='https://momentjs.com/'>moment.js</a>,{' '}
            <a href='https://getbootstrap.com/'>Bootstrap</a>
            &nbsp;and&nbsp;
            <a href='http://fontawesome.io/'>Font Awesome</a>.
          </p>
        </div>
      </Section>
    )
  }
}
