"use client"

import {useState} from 'react';
function ImageGallery() {
    const [fotos,setFotos]=useState([{id:1,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkkep1r5mvmiZCfSgw_B-kobHUp98YNHnnQ&s"},
                                     {id:2,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRpjuftpwhPenSw0lDYVzgrOwas3jyZ2dJA&s"},
                                     {id:3,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJeJUlD5XhuBdAKLjC7SkB9SfzWhLHHVl_w&s"},
                                     {id:4,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jBuw33C89q5dWMmCHtqTadE1dGIg8Xmwwg&s"},
                                     {id:5,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPa56L-HAMnzGIaR726yHyEXevC6Sdrh3Tw&s"},
    ]);
    const [indice,setIndice]=useState(0);
    const [rutaFoto,setRutaFoto]=useState(fotos[indice].url);
    function anterior(e){
        e.preventDefault();
        if(indice-1<0){
            setRutaFoto(fotos[indice].url);
        }else{
        setIndice(indice-1);
        setRutaFoto(fotos[indice-1].url);
        }
    }
    function siguiente(e){
        e.preventDefault();
        if(indice+1>fotos.length-1){
            setRutaFoto(fotos[indice].url);
        }else{
        setIndice(indice+1);
        setRutaFoto(fotos[indice+1].url);
        }
    }

    return (
        <div> 
        <img src={rutaFoto}></img><br/>
        <button onClick={e=>anterior(e)}>Anterior</button>
        <button onClick={e=>siguiente(e)}>Siguiente</button>
        </div>
     );
}

export default ImageGallery;