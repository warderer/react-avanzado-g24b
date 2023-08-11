import { useSongContext } from '@/hooks/useSongContext'
import './songlist.css'

const SongList = () => {
  const { list, loading, setSelectedSong } = useSongContext()

  return (
    <>
      {loading
        ? <h1>Cargando...</h1>
        : list.map((song) => (
          <div
            className='row-song'
            key={song.id}
            onClick={() => setSelectedSong(song)}
          >
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))}
    </>
  )
}
export default SongList
