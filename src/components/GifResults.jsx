import React from "react";
import { getGifts } from "../helpers/GetGifts";
import { GifCard } from "./GifCard";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifResults = ({ busqueda }) => {
  //   const [images, setimages] = useState([]);
  //   useEffect(() => {
  //     getGifts(busqueda).then(
  //         img => setimages(img)
  //     )
  //   });
  const { data, loading } = useFetchGifs(busqueda);
  //console.log(data);
  //console.log(loading);
  //console.log(data);

  return (
    

    <>
     <h3 className="titulo animate__animated animate__fadeIn">{busqueda}</h3>
     {loading && <h2 className="titulo">Cargando....</h2>}
     <div className="row">
        {data.map((gif) => (
            <GifCard key={gif.id} title={gif.title} url={gif.url} />
        ))}
    </div>
    </>






    /*
    <> 
      { loading ? (
        <h2 className="titulo">Cargando....</h2>
      )
      : (
        <>
        {data.length > 0 && ( <h3 className="titulo  animate__animated animate__fadeIn">{busqueda}</h3>)}
        <div className="row">
        {data.map((gif) => (
            <GifCard key={gif.id} title={gif.title} url={gif.url} />
        ))}
        </div>
        </>
      )
     }   
     </>  
     */
   
      
  )
}

/*
<>
  {data.length > 0 ? (
    <div>
      <h1 className="titulo">{busqueda}</h1>
    </div>
  ) : (
    
  )}
</>;

data.length > 0 ? 
<h1 className="titulo">{busqueda}</h1>
: { loading ? 
  <h1 className="titulo">Cargando Gifs...</h1>
 : (
  <div className="row">
    {data.map((gif) => (
      <GifCard key={gif.id} title={gif.title} url={gif.url} />
    ))}
  </div>
)} 
*/
