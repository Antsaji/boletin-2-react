"use client"

import {useState} from 'react';
function UserTable() {

    const[lista,setLista]=useState([{id:1,nombre:"Antonio",email:"antonio@gmail.com",edad:"20"},
                                    {id:2,nombre:"Jose",email:"Jose@gmail.com",edad:"20"},
                                    {id:3,nombre:"OOB",email:"oob@gmail.com",edad:"202"},
    ]);
    const listaPersonas=lista.map(persona => <Persona key={persona.id}
        id={persona.id}nombre={persona.nombre}email={persona.email}edad={persona.edad}onBorrarPersona={onBorrarPersona}/>);

        function onBorrarPersona(personitax){
    
            setLista(lista.filter(a=>a.id!==personitax.id));
        }
const[nombre,setNombre]=useState("");
const[email,setEmail]=useState("");
const[edad,setEdad]=useState("");

function cambiarNombre(e){
e.preventDefault();
setNombre(e.target.value);
}
function cambiarEmail(e){
    e.preventDefault();
    setEmail(e.target.value);
    }
    function cambiarEdad(e){
        e.preventDefault();
        setEdad(e.target.value);
        }
function agregar(e){
    e.preventDefault();
    setLista([...lista,{id:lista.length+1,nombre:nombre,email:email,edad:edad}]);
}
    return ( 
        <div>
            <input type='text' placeholder='nombre' onChange={e=>cambiarNombre(e)}></input>
            <input type='text' placeholder='email' onChange={e=>cambiarEmail(e)}></input>
            <input type='text' placeholder='edad' onChange={e=>cambiarEdad(e)}></input>
            <button type='button' onClick={e=>agregar(e)}>AGREGAR</button>
        <table>
            <tbody>
                {listaPersonas}
            </tbody>
        </table>
        </div>
     );
}

export function Persona({id,nombre,edad,email,onBorrarPersona}){

    const borrar=(e)=>{
        e.preventDefault();
        onBorrarPersona({id,nombre,edad});

    }
    return(
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{email}</td>
            <td>{edad}</td>
            <td><button onClick={e=>borrar(e)}>Borrar</button></td>
        </tr>
    );
}
export default UserTable;