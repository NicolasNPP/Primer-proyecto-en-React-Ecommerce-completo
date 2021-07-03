import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ name, price, description, category, img, id }) => (
  <Card className="tarjeta">
  <Link to={`/detail/${id}`}>  <Card.Img variant="top" src={img} className="imgtamaño"/> </Link>
  <Card.Body className="cuerpocard">
  <Link to={`/detail/${id}`}><Card.Title>{name}</Card.Title></Link>
    <Card.Text>
      {category}
    </Card.Text>
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
