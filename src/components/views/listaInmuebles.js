import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

function ListaInmuebles (){
        return ( 
            <Fragment>
                <Button variant="contained" color="primary">Color Primario</Button>
                <Button variant="contained" color="secondary">Color Secundario</Button>
            </Fragment>
         );
    }

 
export default ListaInmuebles;