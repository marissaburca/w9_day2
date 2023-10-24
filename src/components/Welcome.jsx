import React, { useEffect } from 'react';

function CustomWelc() {
    useEffect(() => {
        alert('Benvenuto/a nel nostro negozio di libri');
      }, []);  
  return (
    <div>
      <h1>I migliori libri a prezzi accessibili</h1>
    </div>
  );
}

export default CustomWelc;
