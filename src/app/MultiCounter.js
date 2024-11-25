"use client"

import {useState} from 'react';
let index=0;
function MultiCounter() {

    const[lista,setLista]=useState([]);

    function agregarContador(e){
        e.preventDefault();
        setLista([...lista,<Contador key={index++}/>]);
    }

    return ( 
        <form>
            <button onClick={e=>agregarContador(e)}>Agregar Contador</button>
            {lista}
        </form>
     );
}

export function Contador(){
    const[contador,setContador]=useState(0);
    const decrementar=(e)=>{
        e.preventDefault();
        setContador(contador-1);
    }
    const aumentar=(e)=>{
        e.preventDefault();
        setContador(contador+1);
    }
    const resetear=(e)=>{
        e.preventDefault();
        setContador(0);
    }
    return(
    <div>
        <label>{contador}</label><br/>
        <button onClick={e=>decrementar(e)}>Decrementar</button>
        <button onClick={e=>aumentar(e)}>Aumentar</button>
        <button onClick={e=>resetear(e)}>Resetear</button>
    </div>
    );
}
export default MultiCounter;