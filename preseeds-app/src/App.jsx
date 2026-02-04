import './App.css'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import Firstlanding from './firstlanding'
import Home from './home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<Firstlanding />} />
        <Route path="/home" element={<Home />} />
    </>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
