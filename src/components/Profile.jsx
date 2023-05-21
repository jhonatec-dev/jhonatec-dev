import { Button, ButtonGroup } from '@mui/material';
import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img src="" alt="Jhonatan" />
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    );
  }
}
