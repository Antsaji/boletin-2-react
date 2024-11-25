"use client"

import { useState } from "react";
function LimitedCounter() {
    const [numero,setNumero]=useState(0);
    const [numeroLimite,setNumeroLimite]=useState(0);

    const sumarUno=(e)=>{
        e.preventDefault();
        if(numero+1>numeroLimite){
            setNumero(numero);
        }else{
            setNumero(numero+1);
        }
        
    }
    const reseteo=(e)=>{
        e.preventDefault();
        setNumero(0);
    }
    function cambiarNumero(e){
        setNumeroLimite(parseInt(e.target.value));
    }
    return ( 
        <form>
            <input type="number" placeholder="Mete el numero limite beibi" onChange={e=>cambiarNumero(e)}></input>
            <label>{numero}</label>
            <button type="button" onClick={sumarUno}>+1</button>
            <button type="button" onClick={reseteo}>Reset</button>
        </form>
     );
}

export default LimitedCounter;