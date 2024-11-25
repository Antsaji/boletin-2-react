"use client"

import { useState } from "react";
function SurveySimulator() {
    const [si,setSi]=useState(0);
    const [no,setNo]=useState(0);
    const [talVez,setTalvez]=useState(0);
    function aumentarSi(e){
        e.preventDefault();
        setSi(si+1);
    }
    function aumentarNo(e){
        e.preventDefault();
        setNo(no+1);
    }
    function aumentarTalVez(e){
        e.preventDefault();
        setTalvez(talVez+1);
    }
    return ( 
        <div>
            <label>Contador si: {si}</label>
            <button onClick={e=>aumentarSi(e)}>SI</button><br/>
            <label>Contador no: {no}</label>
            <button onClick={e=>aumentarNo(e)}>NO</button><br/>
            <label>Contador tal vez: {talVez}</label>
            <button onClick={e=>aumentarTalVez(e)}>TAL VEZ</button>
        </div>
     );
}

export default SurveySimulator;