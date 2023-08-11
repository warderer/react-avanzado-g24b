import { useSongContext } from '@/hooks/useSongContext'

const SongDetails = () => {
  const { selectedSong } = useSongContext()
  return (
    <>
      {selectedSong.title
        ? (
          <div>
            <img src={selectedSong.img_url} alt={selectedSong.title} />
            <h2>{selectedSong.title}</h2>
            <p>{selectedSong.artist}</p>
            <p>{selectedSong.year}</p>
          </div>
          )
        : <h1>Selecciona una canción</h1>}
    </>
  )
}
export default SongDetails
