"use client"

import {useState} from 'react';
function TextCarrousel({prop}) {
  const [textos, setTextos] = useState(prop)
  const [indice, setIndice] = useState(0);
  const [rutaTexto, setRutaTexto] = useState(textos[indice].text);
  function anterior(e) {
    e.preventDefault();
    if (indice - 1 < 0) {
        setRutaTexto(textos[indice].text);
    } else {
      setIndice(indice - 1);
      setRutaTexto(textos[indice-1].text);
    }
  }
  function siguiente(e) {
    e.preventDefault();
    if (indice + 1 > textos.length - 1) {
        setRutaTexto(textos[indice].text);
    } else {
      setIndice(indice + 1);
      setRutaTexto(textos[indice+1].text);
    }
  }

  return (
    <div>
      <label>{rutaTexto}</label>
      <br />
      <button onClick={(e) => anterior(e)}>Anterior</button>
      <button onClick={(e) => siguiente(e)}>Siguiente</button>
    </div>
  );
}

export default TextCarrousel;
