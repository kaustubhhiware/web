import React from "react";
import './base.css';
import { Row, Col } from 'react-bootstrap';
import changeTheme from './../utils/changeTheme.js';

import {Themes, ThemeDefault} from '../data/_themes';

const circularIncrement = (i) => {
  if (i+1 >= Themes.length) {
    return 0
  }
  return i+1
}

const toggleThemes = () => {
  let index = window.getComputedStyle(document.documentElement).getPropertyValue('--theme-index');
  index = index - "0" || 0;

  index = circularIncrement(index)
  let next_index = circularIncrement(index)
  changeTheme(Themes[index], Themes[next_index])

  // increment for next toggle
  document.documentElement.style.setProperty('--theme-index', (index).toString());
}

export const Themer = () => {
  
  return (
    <Row className="themer-row">
    <Col xs={6} md={1} className="themer-set">
      <button id="themer" onClick={toggleThemes}>
        <span role="img" aria-label="theme-switcher" id="themoji">
          {Themes[circularIncrement(parseInt(ThemeDefault))].Emoji}
        </span>
      </button>
    </Col>
    <Col xs={6} md={3}>Top nav</Col>
    </Row>
    );
  };

  export default Themer;