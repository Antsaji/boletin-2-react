"use client"

import {useState} from 'react';
function ThemeSelector() {
    const [color,setColor]=useState("black");
    function cambiarTemaOscuro(e){
        setColor("gray");
    }
    function cambiarTemaClaro(e){
        setColor("white");
    }
    function cambiarTemaRojo(e){
        setColor("red");
    }
    return ( 
        <div style={{backgroundColor:color}}>
            <button onClick={e=>cambiarTemaOscuro(e)}>Tema Oscuro</button>
            <button onClick={e=>cambiarTemaClaro(e)}>Tema Claro</button>
            <button onClick={e=>cambiarTemaRojo(e)}>Tema Rojo</button>
        </div>
     );
}

export default ThemeSelector;