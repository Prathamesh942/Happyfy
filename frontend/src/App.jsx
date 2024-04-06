import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Murmur from './pages/Murmur';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/meditate",
    element: <Murmur/>
  },
  {
    path: "/mood",
    element: <div>track mood here</div>
  },
  {
    path: "/therapy",
    element: <div>Take therapy here</div>
  },
  {
    path: "/resource",
    element: <div>Get guidance here</div>
  }

]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
