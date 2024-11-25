"use client"

import {useState} from 'react';
function ShoppingCart() {
    const [lista,setLista]= useState([{id:1,nombre:"papas campesina"},
                                      {id:2,nombre:"papas jamon york"},
                                      {id:3,nombre:"papas jamon"},
                                      {id:4,nombre:"papas vinagre"},
                                      {id:5,nombre:"papas webo frito"},
    ]);

    const listaProductos= lista.map(producto=> <Producto key={producto.id}id={producto.id}nombre={producto.nombre}
        onBorrarProducto={onBorrarProducto}editarCampo={editarCampo}onEditarProducto={onEditarProducto}/>);

    function onBorrarProducto(itemBorrar){
        setLista(lista.filter(a=>a.id!==itemBorrar.id))
       
    }
    const[campo,setCampo]=useState("");

    function editarCampo(e){
        e.preventDefault();
        setCampo(e.target.value);
    }

    function onEditarProducto(itemEditar){
        setLista(lista.map(producto=>{
            if(producto.id===itemEditar.id){
                return{...producto,id:itemEditar.id,nombre:campo};
            }else{
                return producto;
            }
        }))
       
    }

    return ( 
        
            <ul>
                {listaProductos}
            </ul>
        
     );
}
export function Producto({id,nombre,onBorrarProducto,editarCampo,onEditarProducto}) {
    const handleClick =(e)=>{
        e.preventDefault();
        onBorrarProducto({id:id,nombre:nombre})
    }
    const clickEditar=(e)=>{
        e.preventDefault();
        onEditarProducto({id:id,nombre:nombre});
    }
    return ( 
        <li>
            <h3>{id}</h3>
            <p>{nombre}</p>
            <button type='button' onClick={handleClick}>Borrar Producto</button>
            <input type='text' onChange={e=>editarCampo(e)} placeholder='Inserta aqui el nuevo nombre'></input>
            <button type='button' onClick={clickEditar}>Editar</button>
        </li>
     );
}


export default ShoppingCart;