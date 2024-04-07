import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Murmur from './pages/Murmur';
import Resources from './pages/Resources';

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
    element: <div className='bg-[#a5ffc7] w-screen h-screen bg-white'><iframe src="https://happyfy-4167.chipp.ai"  frameborder="0" title="Solace.ai" className=' w-[75%] h-[95%] rounded-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'/></div>
  },
  {
    path: "/resource",
    element: <Resources/>
  }

]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
