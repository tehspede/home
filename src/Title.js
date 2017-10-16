import React, { Component } from 'react';
import { Section } from 'react-fullpage';

export default class Title extends Component {
  render() {
    return (
      <Section className="text-center">
        <h1
          style={{
            color: '#fbfafa',
            fontSize: '3.2em',
            fontWeight: '200',
            marginBottom: '0',
            marginTop: '-20px'
          }}
        >
          Aleksi Gold
        </h1>
        <small
          style={{
            color: '#fbfafa',
            fontSize: '1em'
          }}
        >
          Student | Developer | Engineer
        </small>
      </Section>
    );
  }
}
