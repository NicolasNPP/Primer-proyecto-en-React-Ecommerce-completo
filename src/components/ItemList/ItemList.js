import React, { Suspense, lazy } from 'react';
import Loading from '../Loading/Loading';
import { Container, Row, Col } from 'reactstrap';
const ItemSemantic = lazy(() => import('../ItemSemantic/ItemSemantic'))


const ItemList = ({ data }) => {

    return (
        <div>

            <Container>
                <Row>
                    {data.map(function (num) {
                        return <Col md="3"><div key={num.id}><Suspense fallback={<Loading></Loading>}><ItemSemantic name={num.name} price={num.price} description={num.description} id={num.id} img={num.photo} stock={num.stock} /></Suspense></div></Col>

                    })}
                </Row>
            </Container>
        </div>
    )
}




export default ItemList;
