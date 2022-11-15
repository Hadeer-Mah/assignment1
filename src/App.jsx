import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';



const routers = createBrowserRouter([
  {path:'/', element: <MainLayout/>, children:[
    {path:'', element:<Home/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'about', element:<About/>},
    {path:'contact', element:<Contact/>}

  ]}
])

function App() {
  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App;
