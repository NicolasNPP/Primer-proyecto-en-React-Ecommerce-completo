import React from 'react';
import { Spinner } from 'reactstrap';
import './Loading.css'
import './Cargando.css'

function Loading() {
    return (
        <div className="cargando">
            <Spinner color="dark" className="cargandodos" />
        </div>
    )
}

export default Loading