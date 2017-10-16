import React, { Component } from 'react';
import { Section } from 'react-fullpage';

import 'font-awesome/css/font-awesome.css';

export default class Experience extends Component {
  render() {
    return (
      <Section>
        <h2 class="col-md-offset-2">My Experience</h2>
        <div class="row">
          <div class="col-md-offset-2 col-md-4">
            <h3>
              <i class="fa fa-graduation-cap">&nbsp;</i>Education
            </h3>
            <ul>
              <li>
                Vaasan Ammattikorkeakoulu
                <ul>
                  <li>Bachelor's Degree in Information Technology</li>
                  <li>Software Engineering</li>
                  <li>September 2014 - Present</li>
                </ul>
              </li>
              <li>
                Tampereen lyseon lukio
                <ul>
                  <li>International Baccalaureate</li>
                  <li>September 2009 - May 2012</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h3>
              <i class="fa fa-briefcase">&nbsp;</i>Work
            </h3>
            <ul>
              <li>
                Jubic
                <ul>
                  <li>Software Developer</li>
                  <li>September 2017 - Present</li>
                </ul>
              </li>
              <li>
                Visma
                <ul>
                  <li>System Developer</li>
                  <li>June 2017 - August 2017</li>
                </ul>
              </li>
              <li class="hideden-xs">
                Anvia
                <ul>
                  <li>Software Developer</li>
                  <li>June 2016 - August 2016</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    );
  }
}
