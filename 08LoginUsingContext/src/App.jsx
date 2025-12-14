import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvide'

function App() {

  return (
    <UserContextProvider>

      <h1 className='text-3xl'>User Context Working</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
