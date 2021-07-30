import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import './ItemSemantic.css';


const ItemSemantic = ({ name, price, description, category, img, id }) => (
  <Card>
    <Link to={`/detail/${id}`}> <Image src={img} wrapped ui={false} /></Link>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'> {category}</span>
      </Card.Meta>
      <Card.Meta>
        <span className='date'> ${price}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <ItemCount nombre={name} precio={price} identificacion={id} price={price} name={name} />
  </Card>
)

export default ItemSemantic




