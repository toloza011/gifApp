import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifResults } from "./GifResults";
import { useFetchGifs } from "../Hooks/useFetchGifs";

function GifApp() {
  //const categorias = ['Anime','Accion','Humor'];
  const [categorias, setcategorias] = useState([]);
  const loading = true;
  return (
    <div>
      <h1 className="titulo_main">GIFAPP</h1>
      <AddCategory setcategorias={setcategorias} />
      <hr />
      {categorias.map((categoria, i) => {
          //console.log("La categoria buscada es: " + categoria);
          //console.log(categorias);
          //console.log("La categoria buscada es : "+categoria);
          //console.log("todas tus categorias ordenadas son: "+categorias)
        
          return (
         
            // <GifResults
            // busqueda = {categoria}
            // key={i} />
            <GifResults key={i} busqueda={categoria} />
          );
        })}
    </div>
  );
}
export default GifApp;
