import { useSongContext } from '@/hooks/useSongContext'
import './songlist.css'

const SongList = () => {
  const { list, loading, setSelectedSong, search } = useSongContext()

  const filteredSongs = list.filter(
    song => song.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className='row-container'>
        {loading
          ? <h1>Cargando...</h1>
          : filteredSongs.map((song) => (
            <div
              className='row-song'
              key={song.id}
              onClick={() => setSelectedSong(song)}
            >
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))}
      </div>
    </>

  )
}
export default SongList
