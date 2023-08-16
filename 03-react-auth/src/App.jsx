import './App.css'
import { Home, Dashboard, Login, Signup, Secret } from '@/pages'
import Header from '@/components/Header/Header'

function App () {
  return (
    <>
      <Header />
      <h1>React App</h1>
      <Home />
      <Dashboard />
      <Login />
      <Signup />
      <Secret />
    </>
  )
}

export default App
