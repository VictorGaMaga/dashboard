import React, { useEffect, useState } from 'react';

function Indicador() {
    const [indicador, setIndicador] = useState(0);
    useEffect(() => {
      fetch('https://api-dash-tau.vercel.app/indicador')
        .then(response => response.json())
        .then(data => {
          console.log('Dados do indicador recebidos:', data);
          const indicadorNumber = parseInt(data[0].indicador);
          setIndicador(indicadorNumber);
        })
        .catch(error => console.error('Erro ao obter dados do indicador:', error));
    }, []);

    return (
      <div>
        <h1>Número do Indicador</h1>
        <p>{JSON.stringify(indicador)}</p>
      </div>
    );
  }

export default Indicador;