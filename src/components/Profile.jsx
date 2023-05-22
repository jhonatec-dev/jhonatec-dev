import { GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
import React, { Component } from 'react';
import jhonImg from '../assets/jhon.jpg';

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img className="Profile__img" src={ jhonImg } alt="Jhonatan" />
        <h4>Olá! Meu nome é Jhonatan, mas pode me chamar de Jhonatec!</h4>
        <p>
          Sou um desenvolvedor FullStack em construção.
          Confira meus projetos à medida que vou avançando em minha jornada!

        </p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button startIcon={ <GitHub /> } href="https://github.com/jhonatec-dev" target="_blank"> GitHub</Button>
          <Button startIcon={ <YouTube /> } href="https://www.youtube.com/@jhonatec" target="_blank">YouTube</Button>
          <Button startIcon={ <Instagram /> } href="https://instagram.com/jhonatec.dev" target="_blank">Instagram</Button>
          <Button startIcon={ <LinkedIn /> } href="https://www.linkedin.com/in/jhonatec/" target="_blank">LinkedIn</Button>
        </ButtonGroup>
      </div>
    );
  }
}
