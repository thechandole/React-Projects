import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Github, { githubLoaderInfo } from './components/Github/Github'
import Contact from './components/Contact/Contact'
import User from './components/User/User'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      
      {/* Child Routes */}
      <Route path='' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='contact-us' element = {<Contact/>}/>
      <Route path='user/:userid' element = {<User/>}/>
      <Route loader={githubLoaderInfo} path="github" element = {<Github/>}/>

    </Route>
  )
);

//   // {
//   //   element : '/',
//   //   path : <Layout/>,
//   //   children : [
//   //     {
//   //       element :'',
//   //       path : <Home/>,
//   //     },
//   //     {
//   //       element :'about',
//   //       path : <About/>,
//   //     }
//   //   ]
//   // }
// ]


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
