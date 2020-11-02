
export const getGifts = async(busqueda) => { 
    const api =`https://api.giphy.com/v1/gifs/search?api_key=vMIbRknwqqDI2toM3VnP98396l37RhAB&q=${encodeURI(busqueda)}&limit=8`;
    const res = await fetch(api);
    const { data } = await res.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })
   
    return gifs;
   // console.log(gifs);
  };