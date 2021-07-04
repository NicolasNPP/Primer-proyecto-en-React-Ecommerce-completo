import React from 'react';
import { Spinner } from 'reactstrap';
import './Loading.css'

function Loading() {
    return (
        <div>
            <Spinner color="dark" />
        </div>
    )
}

export default Loading