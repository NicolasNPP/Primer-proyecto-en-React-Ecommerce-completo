import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css';

const Item = ({ name, price, description, img }) => (
    <Card>
  <Card.Img variant="top" src={img} classNamae="imgtamaño"/>
  <Card.Body>
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
