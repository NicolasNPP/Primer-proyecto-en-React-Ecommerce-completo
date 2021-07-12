import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

// 2 - CREAR EL COMPONENTE PROVIDER
// 5 - PASAR PROPS DENTRO DEL COMPONENTE PROVIDER

const initialState = []

export const ItemsProvider = (props) => {


    const [items, setItems] = useState(initialState);




    // 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
    return (
        <ItemsContext.Provider value={[items, setItems]}>
            {/* 4 - props.childre  */}
            {props.children}
        </ItemsContext.Provider>
    );
};