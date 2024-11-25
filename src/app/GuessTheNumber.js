"use client"
const random=(Math.floor(Math.random()*100)+1);

import {useState} from 'react';
function GuessTheNumber() {
    
const[numero,setNumero]=useState(0);
    function cambiarNumero(e){
        setNumero(parseInt(e.target.value));
    }
    const[contador,setContador]=useState(0);
    const[mensaje,setMensaje]=useState();
    function probar(e){
        setContador(contador+1);
        e.preventDefault();
        
        console.log(random);
        if(numero===random){
            setMensaje("YYYYYYYYYYYYYYYEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE FEIN FEIN FEIN FEINFEINFEIN")
        }
        if(numero>random){
            setMensaje("Bajale manito");
        }if(numero<random){
            setMensaje("Parriba ahiii AE STAEEEEE")
        }
        
    }
    return ( 
        <div>
            <input type="number" placeholder="adivina un numero" onChange={e=>cambiarNumero(e)}></input>
            <button onClick={e=>probar(e)}>Probar Suerte</button><h3>{contador}</h3><br/>
            <label>{mensaje}</label>
        </div>
     );
}

export default GuessTheNumber;