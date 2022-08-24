


// import React, {useState, useEffect} from 'react';
import React, {useState, useEffect} from 'react';


const Clock = () => {

    //Valor inicial para una persona
    const clockInicial = {
      fecha: new Date().toLocaleDateString(), 
      edad: 0,
      nombre: 'Martín',
      apellidos: 'San José'

    }

    // DidandWillUnComponentMount
        const [seconds, setSeconds] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
          return () => clearInterval(interval);
        }, []); 


        const [prevState, setClock] = useState(clockInicial);
        
        function actualizarClock(){
            setClock({
              edad: prevState.edad + 1,
              fecha: new Date().toLocaleDateString(),
              nombre: 'Pedro',
              apellidos: 'Morel'});
              

        }

         
    return (
        <div>
            <h2>Datos Clock:</h2>
            <h4>Fecha: {prevState.fecha}</h4>
            <h4>Edad: {prevState.edad}</h4>
            <h4>Nombre: {prevState.nombre}</h4>
            <h4>Apellidos: {prevState.apellidos}</h4> 

            <h4>Intervalo: {seconds}</h4>   

            <button onClick={actualizarClock}>actualizarPersona</button>        

        </div>
    );
}

export default Clock;


