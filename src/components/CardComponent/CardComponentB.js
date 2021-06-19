import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponentB = ({ name, price, description, img }) => (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {price}
    </Card.Text>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>
  )

export default CardComponentB
