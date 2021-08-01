import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

const initialState = []

export const ItemsProvider = (props) => {


    const [items, setItems] = useState(initialState);


    return (
        <ItemsContext.Provider value={[items, setItems]}>
            {/* 4 - props.childre  */}
            {props.children}
        </ItemsContext.Provider>
    );
};