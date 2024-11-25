"use client"

import { useState } from "react";
function AverageCalculator() {
    const [numeros,setNumeros]=useState([]);
    const [numeroIngresar,setNumeroIngresar]=useState(0);
    function ingresarNumero(e){
        e.preventDefault();
        setNumeros([...numeros,numeroIngresar]);
        console.log(numeros);
        calcularMedia([...numeros,numeroIngresar]);
        listarNumeros([...numeros,numeroIngresar]);
    }
    function cambiarNumeroIngresar(e){
        e.preventDefault();
        setNumeroIngresar(parseInt(e.target.value));
    }
    const [mediaNumeros,setMediaNumeros]=useState(0);
    function calcularMedia(lista){
        let media=0;
        for(let i=0;i<lista.length;i++){
            media=media+parseInt(lista[i]);
        }
        media=media/lista.length;
        setMediaNumeros(media);
    }
    const[listaNumeros,setListaNumeros]=useState("");
    function listarNumeros(listaR){
        let lista="";
        for(let i=0;i<listaR.length;i++){
            lista=lista+listaR[i].toString()+" ";
        }
        setListaNumeros(lista);
    }
    return ( 
        <form>
            <input type="number" placeholder="Numero para ingresar" onChange={e=>cambiarNumeroIngresar(e)}></input>
            <button type="button" onClick={e=>ingresarNumero(e)}>AGREGAR CONSHATUMARE</button>
            <label>Lista de numeros: {listaNumeros}</label>
            <label>Media de los nuemros: {mediaNumeros}</label>
        </form>
     );
}

export default AverageCalculator;