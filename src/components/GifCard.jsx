import React from 'react'

export const GifCard = ({url,title}) => {
    console.log(url);
    return (
        <div className="card animate__animated animate__fadeIn">
          <img src={url}  title={title}/>
            <p>{title}</p>
           <a target="__blank" href={url}>Visitar</a>
        </div>
    )
}
