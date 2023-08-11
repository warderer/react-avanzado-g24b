import { useSongContext } from '@/hooks/useSongContext'
import './header.css'

const Header = () => {
  const { selectedSong } = useSongContext()

  return (
    <div className='header__container'>
      {
            selectedSong.title
              ? (
                <span>Now playing: {selectedSong.title} - {selectedSong.artist}</span>
                )
              : <h2>Selecciona una canción</h2>
        }
    </div>
  )
}
export default Header
