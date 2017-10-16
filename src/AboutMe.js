import React, { Component } from 'react';
import { Section } from 'react-fullpage';
import moment from 'moment';

import me from './img/me.jpg';

export default class AboutMe extends Component {
  render() {
    const age = moment().diff(moment('1994-01-21'), 'years');

    return (
      <Section>
        <h2>About me</h2>
        <img
          className="img-rounded pull-left avatar hidden-xs"
          alt="Aleksi Gold."
          src={me}
          style={{
            height: 'auto',
            maxWidth: '150px',
            marginRight: '15px'
          }}
        />
        <div className="text-justify">
          <p>
            I'm a {age}-year old student living in Vaasa. I study Information
            Technology (B.Eng.), in English, at Vaasa University Applied
            Sciences and specialize in Software Engineering. My passion lies in
            solving other people's problems, and in this day and age, they can
            usually be solved with software solutions.
          </p>
          <p>
            I specialize in web development and can handle both frontend and
            backend parts of it. For frontend, I have used several different
            technologies such as jQuery, Bootstrap and React. For backend, I can
            use Ruby, NodeJS, Java or PHP. I have also used other languages for
            non-web applications such as C and Python. I have also used and
            programmed Arduinos to do various tasks around my house. Linux is
            another strength of mine as I have been an avid Linux user for
            several years.
          </p>
          <p className="hidden-xs">
            While having done all my schooling in English, I am also fluent in
            Finnish. Some hobbies of mine include downhill skiing, gaming,
            electronics and fishing. I also like to automate things at home and
            have done some projects, such as, connecting my lights to WiFi and
            having them turn on and off depending on if I'm home or not.
          </p>
        </div>
      </Section>
    );
  }
}
