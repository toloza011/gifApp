import React, { useState } from "react";
import Proptypes from 'prop-types';
export const AddCategory = ({setcategorias}) => {
  const [buscador, setbuscador] = useState('');

  const buscar = (e) => {
    setbuscador(e.target.value);
  };
  const handleSubmit = (e) => {
     e.preventDefault();
     if(buscador.trim().length > 0){
        console.log(buscador);
        setcategorias( (categorias) => [buscador,...categorias]);
        setbuscador('');
     }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca el gif que mas te guste"
          onChange={buscar}
          value={buscador}
        />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
    setcategorias : Proptypes.func.isRequired,
    
}

