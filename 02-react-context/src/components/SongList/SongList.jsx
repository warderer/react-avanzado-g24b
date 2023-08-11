import { useState, useEffect } from 'react'
import './songlist.css'
// import canciones from '../../assets/listaCanciones.json'
import canciones from '@/assets/listaCanciones.json'

const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  // Simular una llamada a la API con la lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {loading
        ? <h1>Cargando...</h1>
        : list.map((song) => (
          <div className='row-song' key={song.id}>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))}
    </>
  )
}
export default SongList
