import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ name, price, description, img }) => (
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
    <ItemCount/>  
  </Card.Body>
</Card>
  )

export default Item
