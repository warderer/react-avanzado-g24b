// CUSTOM HOOKS
// Empienzan con la palabra use
// Son funciones
// Deben usar otros hooks de react
import { useContext } from 'react'
import { SongContext } from '@/context/SongContext'

// Paso #3: Crear un custom hook para usar el contexto
export const useSongContext = () => {
  const context = useContext(SongContext)

  if (!context) {
    throw new Error('useSongContext debe usarse dentro de SongProvider')
  }

  return context
}
