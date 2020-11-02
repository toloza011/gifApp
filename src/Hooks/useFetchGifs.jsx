import {useState,useEffect} from 'react'
import {getGifts} from '../helpers/GetGifts'

export const useFetchGifs = (categoria) =>{

    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        getGifts(categoria)
        .then(gif => { 
                 setstate({
                    data: gif,
                    loading: false
                 })
        });
       
    }, [categoria]); //ejecutar el efecto una sola vez.
    

    

    return state;
}