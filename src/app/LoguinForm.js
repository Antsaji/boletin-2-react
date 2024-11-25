"use client"

import {useState} from 'react';
function LoguinForm() {
    const lista=[{usuario:"antonio",contraseña:"antonio1"},
                 {usuario:"pepe",contraseña:"pepe2"},
                 {usuario:"jose",contraseña:"jose3"},
                 {usuario:"manue4",contraseña:"manue4"},
    ];
    const [usuario,setUsuario]=useState("");
    const [contra,setContra]=useState("");

    function editarUsuario(e){
        e.preventDefault();
        setUsuario(e.target.value);
    }
    function editarContra(e){
        e.preventDefault();
        setContra(e.target.value);
    }
    const [iniciado,setIniciado]=useState(false);
    function iniciar(e){
        e.preventDefault();
        for(let i=0;i<lista.length;i++){
            if(lista[i].usuario===usuario&&lista[i].contraseña===contra){
                setIniciado(true);
            }
        }
    }
    return ( 
        <form>
            <input type='text' onChange={e=>editarUsuario(e)} placeholder='usuario'></input>
            <input type='text' onChange={e=>editarContra(e)} placeholder='contraseña'></input>
            <button type='button' onClick={e=>iniciar(e)}>Iniciar Sesión</button>
            {iniciado? (<h2>SESION INISIADA</h2>):(<h2>NOOO NOOOO POR AHI NO</h2>)}
        </form>
     );
}

export default LoguinForm;
