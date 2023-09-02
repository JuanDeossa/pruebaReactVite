import { useEffect, useState } from 'react'
import './App.css'

export const App=()=>{
  const [url, setUrl] = useState("url")
  useEffect(() => {
    fetch('https://placehold.co/400x600/0DEE98/000000/png')
    .then(response => {
        if (!response.ok) {
        throw new Error('La solicitud no se completó con éxito');
        }
        console.log(response);
        return response.blob();
    })
    .then(blob => {
        console.log(blob);
        const url_ = URL.createObjectURL(blob);
        setUrl(url_)
    })
    .catch(error => {
        console.error('Error:', error);
    });
  },[])

  return (
    <>
      <h1>Prueba</h1>
      <div>
        <img src={url} alt={url}/>
      </div>
    </>
  )
}