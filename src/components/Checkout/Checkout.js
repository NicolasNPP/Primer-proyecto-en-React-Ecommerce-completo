import React, { useState, useEffect, useContext } from 'react';
import { useCartContext } from '../../contexts/CartContext';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { db } from '../../firebase';
import { Link } from "react-router-dom";



const Checkout = () => {
    const { cantitemdos, cart, setCart } = useCartContext();
    let hoy = new Date();
    let date = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();

    const initialState = {
        nombre: '',
        apellido: '',
        email: '',
        productos: cart,
        fecha: date,
        total: '',
    };

    const [values, setValues] = useState(initialState);
    const [ide, setIDe] = useState('');

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setValues({ ...values, [name]: value })
    }

    const handleOnSumbit = (e) => {

        e.preventDefault();

        console.log('hiciste click');
        console.log(values);
        setValues({ ...initialState });
        console.log(values);

        db.collection("orders").add({
            name: values.nombre,
            apellido: values.apellido,
            email: values.email,
            productos: values.productos,
            fecha: values.fecha,
            total: cantitemdos
        })
            .then(
                docRef => {
                    setIDe(docRef.id);

                }
            )
            .catch(e => console.log('error', e));
        setCart([]);
    }

    let tff = (tot) => {
        let y
        if (tot === 0) {
            y = false;
        }
        else {
            y = true;
        }

        return y


    }

    let comprobante = (texto) => {
        let z
        if (texto === '') {
            z = false;
        }
        else {
            z = true;
        }

        return z


    }

    return (
        <div>
            {tff(cantitemdos) ? <div>

                <Form onSubmit={handleOnSumbit}>
                    <FormGroup>
                        <Label for="exampleAddress">Nombre</Label>
                        <Input type="text" name="nombre" id="nombre" placeholder="Nombre" onChange={handleOnChange} value={values.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">Apellido</Label>
                        <Input type="text" name="apellido" id="apellido" placeholder="Apelllido" onChange={handleOnChange} value={values.apellido} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Ingresa tu correo" onChange={handleOnChange} value={values.email} />
                    </FormGroup>
                    <b>Total a pagar: {cantitemdos} </b> <p></p>
                    <Button>Confirmar compra</Button>
                </Form>
            </div> : <div> </div>}

            {comprobante(ide) ? <div>Compra realizada con exito, el numero de operacion es: <b>{ide}</b>   </div> : <div></div>}
        </div>



    )


}


export default Checkout