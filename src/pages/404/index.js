import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/container';
import { PageNumber } from './style';

function NotFound() {
  return (
    <div className="Notfound">
      <Container>
        <PageNumber>404</PageNumber>
        <h1>Página não encontrada</h1>
        <Link to="/">Volte para a home</Link>
      </Container>
    </div>
  );
}

export default NotFound;
