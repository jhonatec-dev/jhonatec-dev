import React, { Component } from 'react';
import teste from '../assets/teste';

export default class AnimatedLogo extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={ { teste } } />
    );
  }
}
