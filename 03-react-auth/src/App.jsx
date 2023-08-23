import './App.css'
import Header from '@/components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes'
import { AdminProvider } from './context/AdminContext'

function App () {
  return (
    <>
      <AdminProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AdminProvider>
    </>
  )
}

export default App
