import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css';

const Item = ({ name, price, description, img }) => (
    <Card className="tarjeta">
  <Card.Img variant="top" src={img} className="imgtamaño"/>
  <Card.Body className="cuerpocard">
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {price}
    </Card.Text>
    <Card.Text>
      {description}
    </Card.Text>
    <ItemCount/>  
  </Card.Body>
</Card>
  )

export default Item
