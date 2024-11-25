"use client"

import {useState} from 'react';
function LiveValidationForm() {

const[validarNombre,setValidarNombre]=useState("");
const [nombre,setNombre]=useState("");
function cambiarNombre(e){
e.preventDefault();
setNombre(e.target.value);
if(nombre.length<4){
    setValidarNombre("MUY CORTO EL NOMBRE");
}else{
    setValidarNombre("Nombre joya");
}
}


const[validarEmail,setValidarEmail]=useState("");
const [email,setEmail]=useState("");
function cambiarEmail(e){
e.preventDefault();
setEmail(e.target.value);
if(email.length<9){
    setValidarEmail("MUY CORTO EL EMAIL");
}else{
    setValidarEmail("Email joya");
}
}


const[validarContra,setValidarContra]=useState("");
const [contra,setContra]=useState("");
function cambiarContra(e){
e.preventDefault();
setContra(e.target.value);
if(contra.length<10){
    setValidarContra("MUY CORTO LA CONSTRASEÑA");
}else{
    setValidarContra("Contraseña joya");
}
}


    return ( 
        <form>
            <input type="text" placeholder="nombre"onChange={e=>cambiarNombre(e)}></input><br/>
            <label>{validarNombre}</label><br/>
            <input type="text" placeholder="email"onChange={e=>cambiarEmail(e)}></input><br/>
            <label>{validarEmail}</label><br/>
            <input type="text" placeholder="contra"onChange={e=>cambiarContra(e)}></input><br/>
            <label>{validarContra}</label><br/>
        </form>
     );
}

export default LiveValidationForm;