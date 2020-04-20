import React, { createContext, useContext, useReducer } from 'react';
export const StateContext = createContext();
export const StateProvider = ( {reducer, initialState, children} ) => (
    /* 
    Proveer variables globales 
    Reducer es la función que puede cambiar el valor cuando se requiera
    */
    <StateContext.provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.provider>

    /* Provider y Consumer
    ya no es necesario hacer un consumer para consumir la variable global, solamente con el UseContext
    */
)

export const useStateValue = () => useContext(StateContext);