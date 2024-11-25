"use client"

import { useState } from "react";
function StudentList() {
const [estudiantes,setEstudiantes]=useState([{id:1,nombre:"Jose"},
                                             {id:2,nombre:"Jose Antonio"},
                                             {id:3,nombre:"Antonio José"},
                                             {id:4,nombre:"JoseMari"},
                                             {id:5,nombre:"Francisco José"}]);
const [nombreEstudiante,setNombreEstudiante]=useState("");

function onChangeNombre(e){
    setNombreEstudiante(e.target.value);
}
function onBorrarEstudiante(estudianteBorrar){
    setEstudiantes(estudiantes.filter(a=>a.id!==estudianteBorrar.id))
}
function onAgregarNota(){
    setEstudiantes([...estudiantes,{id:estudiantes[estudiantes.length-1].id+1,nombre:nombreEstudiante}])
}
const listaEstudiantes=estudiantes.map(estudiante => <Estudiante key={estudiante.id}id={estudiante.id}nombre={estudiante.nombre}onBorrarEstudiante={onBorrarEstudiante}/>);

    
    return ( 
        <ul>
            <input type="text" placeholder="Insertar notita" value={nombreEstudiante} onChange={e=>onChangeNombre(e)}></input>
            <button type="button" onClick={onAgregarNota}>Agregar nota</button>
            {listaEstudiantes}
        </ul>
     );
}
export function Estudiante ({id,nombre,onBorrarEstudiante}){
    const handleClick=(e)=>{
        e.preventDefault();
        onBorrarEstudiante({id:id,nombre:nombre})
    }
    return(
        
        <li>
            <h3>{id}</h3>
            <h2>{nombre}</h2>
            <button type="button" onClick={handleClick}>Eliminar</button>
        </li>
    );
    

}
export default StudentList;