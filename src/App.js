import React, { Component } from 'react'
import { SectionsContainer } from 'react-fullpage'

import Title from './Title'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Contact from './Contact'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: 0
    }
  }

  render () {
    const options = {
      anchors: ['title', 'about', 'experience', 'contact'],
      verticalAlign: true,
      navigation: false,
      scrollCallback: states => this.setState({ current: states.activeSection })
    }

    const overlay = document.getElementById('overlay')
    overlay.classList.remove('fade-white')
    overlay.classList.add('fade-white-out')

    if (this.state.current > 0) {
      overlay.classList.remove('fade-white-out')
      overlay.classList.add('fade-white')
    }

    return (
      <SectionsContainer {...options}>
        <Title />
        <AboutMe />
        <Experience />
        <Contact />
      </SectionsContainer>
    )
  }
}
